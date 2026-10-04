"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Avatar, avatarColor } from "../../messages/InboxClient";
import { RoleBadge } from "@/components/RoleBadge";
import { ChatMedia } from "@/components/ChatMedia";

interface GroupMsg {
  id: number;
  username: string;
  body: string;
  media_url: string | null;
  media_type: string | null;
  created_at: string;
  avatar: string | null;
  pro: number;
  role: string;
}

interface Member {
  username: string;
  avatar: string | null;
  pro: number;
  role: string;
}

interface GroupInfo {
  id: number;
  name: string;
  mine: boolean;
}

function fmtTime(iso: string): string {
  return new Date(iso + "Z").toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const ACCENT = "#ff7a1a";

export function GroupClient({ groupId, username }: { groupId: string; username: string }) {
  const [group, setGroup] = useState<GroupInfo | null>(null);
  const [members, setMembers] = useState<Member[]>([]);
  const [messages, setMessages] = useState<GroupMsg[]>([]);
  const [draft, setDraft] = useState("");
  const [memberQ, setMemberQ] = useState("");
  const [suggests, setSuggests] = useState<Member[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [showMembers, setShowMembers] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const lastId = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const pinnedToBottom = useRef(true);
  const debounce = useRef<ReturnType<typeof setTimeout>>(null);

  function onScroll() {
    const el = listRef.current;
    if (!el) return;
    pinnedToBottom.current = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
  }

  const poll = useCallback(async () => {
    try {
      const res = await fetch(`/api/groups/${groupId}?after=${lastId.current}`);
      if (!res.ok) return;
      const json = await res.json();
      setGroup(json.group);
      setMembers(json.members);
      if (json.messages.length) {
        lastId.current = json.messages[json.messages.length - 1].id;
        setMessages((m) => [...m, ...json.messages].slice(-200));
      }
    } catch {
      /* next poll retries */
    }
  }, [groupId]);

  useEffect(() => {
    poll();
    const t = setInterval(poll, 3000);
    return () => clearInterval(t);
  }, [poll]);

  useEffect(() => {
    const last = messages[messages.length - 1];
    const ownMessage = last?.username === username;
    if (pinnedToBottom.current || ownMessage) {
      const el = listRef.current;
      if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages, username]);

  useEffect(() => {
    if (debounce.current) clearTimeout(debounce.current);
    const term = memberQ.trim();
    if (!term) return;
    debounce.current = setTimeout(async () => {
      const res = await fetch(`/api/users?q=${encodeURIComponent(term)}`);
      if (res.ok) {
        const json = await res.json();
        setSuggests(
          json.users.filter(
            (u: Member) => !members.some((m) => m.username === u.username),
          ),
        );
      }
    }, 250);
  }, [memberQ, members]);

  async function post(body: string, mediaUrl?: string, mediaType?: string) {
    const res = await fetch(`/api/groups/${groupId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body, media_url: mediaUrl, media_type: mediaType }),
    });
    if (!res.ok) {
      const json = await res.json().catch(() => ({}));
      setError(json.error ?? "Failed to send");
      return false;
    }
    return true;
  }

  async function send(e: React.FormEvent) {
    e.preventDefault();
    const body = draft.trim();
    if (!body) return;
    setDraft("");
    setError(null);
    if (!(await post(body))) setDraft(body);
    else poll();
  }

  async function attach(file: File) {
    setError(null);
    setUploading(true);
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    setUploading(false);
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error ?? "Upload failed");
      return;
    }
    if (await post("", json.url, json.type)) poll();
  }

  async function addMember(u: string) {
    const res = await fetch(`/api/groups/${groupId}/members`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: u }),
    });
    const json = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(json.error ?? "Could not add member");
      return;
    }
    setMemberQ("");
    setSuggests([]);
    poll();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex items-center justify-between gap-3">
        <Link href="/groups" className="text-sm font-bold text-neon hover:underline">
          ← All groups
        </Link>
        <button
          onClick={() => setShowMembers((v) => !v)}
          className="rounded-lg border border-edge px-3 py-1.5 text-xs font-bold text-mist hover:border-neon hover:text-white lg:hidden"
        >
          Members ({members.length})
        </button>
      </div>

      <div className="mt-4 grid gap-4 lg:grid-cols-4">
        {/* Chat */}
        <div className="panel flex h-[calc(100vh-13rem)] min-h-[28rem] flex-col lg:col-span-3">
          <div className="flex items-center gap-3 border-b border-edge px-5 py-3.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-neon/15 text-xs font-black text-neon">
              {(group?.name ?? "..").slice(0, 2).toUpperCase()}
            </span>
            <div>
              <p className="font-bold leading-tight">{group?.name ?? "…"}</p>
              <p className="text-xs text-faint">{members.length} members — private group</p>
            </div>
          </div>

          <div ref={listRef} onScroll={onScroll} className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neon/10 text-lg text-neon">
                  👥
                </span>
                <p className="mt-3 max-w-xs text-sm text-faint">
                  No messages yet — kick it off. Share clips, strats or just vibes.
                </p>
              </div>
            )}
            {messages.map((m) => {
              const mine = m.username === username;
              const color = avatarColor(m.username);
              return (
                <div key={m.id} className={`flex items-end gap-2.5 ${mine ? "flex-row-reverse" : ""}`}>
                  {m.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element -- user-uploaded file with cache-bust query
                    <img src={m.avatar} alt={m.username} className="h-8 w-8 shrink-0 rounded-full object-cover" />
                  ) : (
                    <span
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-void"
                      style={{ backgroundColor: mine ? ACCENT : color }}
                    >
                      {m.username.slice(0, 1).toUpperCase()}
                    </span>
                  )}
                  <div className={`max-w-[75%] ${mine ? "text-right" : ""}`}>
                    <p className="mb-1 px-1 text-[11px] text-faint">
                      <span className="font-bold" style={{ color: mine ? ACCENT : color }}>
                        {mine ? "You" : m.username}
                      </span>
                      <RoleBadge role={m.role} pro={m.pro} className="ml-1" />
                      {" · "}
                      {fmtTime(m.created_at)}
                    </p>
                    <p
                      className={`inline-block whitespace-pre-wrap break-words rounded-2xl px-3.5 py-2 text-left text-sm leading-relaxed ${
                        mine ? "rounded-br-sm text-void" : "rounded-bl-sm text-white"
                      }`}
                      style={
                        mine
                          ? { backgroundColor: ACCENT }
                          : { backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }
                      }
                    >
                      {m.body}
                      {m.media_url && <ChatMedia url={m.media_url} type={m.media_type} />}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <form onSubmit={send} className="flex items-center gap-2 border-t border-edge p-4">
            <input
              ref={fileRef}
              type="file"
              accept="image/*,video/mp4,video/webm,audio/*,.pdf"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0];
                if (f) attach(f);
                e.target.value = "";
              }}
            />
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              aria-label="Attach media"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-edge text-sm text-mist transition-colors hover:border-neon hover:text-white disabled:opacity-50"
            >
              {uploading ? "…" : "📎"}
            </button>
            <input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              maxLength={500}
              placeholder={`Message ${group?.name ?? "the group"}…`}
              className="min-w-0 flex-1 rounded-full border border-edge bg-void/60 px-4 py-2.5 text-sm outline-none focus:border-neon"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neon text-sm font-black text-void transition-transform hover:scale-105"
            >
              ➤
            </button>
          </form>
          {error && <p className="px-4 pb-3 text-xs text-mag">{error}</p>}
        </div>

        {/* Members */}
        <div className={`panel flex-col lg:flex ${showMembers ? "flex" : "hidden"}`}>
          <div className="border-b border-edge px-5 py-3.5">
            <h2 className="text-sm font-bold uppercase tracking-widest text-faint">
              Members ({members.length})
            </h2>
          </div>
          <div className="p-3">
            <input
              value={memberQ}
              onChange={(e) => setMemberQ(e.target.value)}
              placeholder="Add member…"
              className="w-full rounded-lg border border-edge bg-void/60 px-3.5 py-2 text-sm outline-none focus:border-neon"
            />
            {memberQ.trim() && suggests.length > 0 && (
              <div className="mt-2 divide-y divide-edge overflow-hidden rounded-lg border border-edge">
                {suggests.slice(0, 5).map((u) => (
                  <button
                    key={u.username}
                    onClick={() => addMember(u.username)}
                    className="flex w-full items-center gap-2.5 bg-void/40 px-3 py-2 text-left text-sm transition-colors hover:bg-white/5"
                  >
                    <Avatar username={u.username} avatar={u.avatar} size={8} />
                    <span className="truncate font-semibold">{u.username}</span>
                    <span className="ml-auto text-xs font-bold text-neon">+ Add</span>
                  </button>
                ))}
              </div>
            )}
            <div className="mt-3 space-y-1">
              {members.map((m) => (
                <div key={m.username} className="flex items-center gap-2.5 rounded-lg px-2 py-1.5">
                  <Avatar username={m.username} avatar={m.avatar} size={8} />
                  <span className="truncate text-sm font-semibold">{m.username}</span>
                  <RoleBadge role={m.role} pro={m.pro} />
                  <Link
                    href={`/messages/${encodeURIComponent(m.username)}`}
                    className="ml-auto text-[11px] font-bold text-faint hover:text-neon"
                    title={`DM ${m.username}`}
                  >
                    DM
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
