// Renders an uploaded media attachment inside a chat bubble.
export function ChatMedia({ url, type }: { url: string; type: string | null }) {
  if (type?.startsWith("image/")) {
    return (
      <a href={url} target="_blank" rel="noreferrer" className="mt-1.5 block">
        {/* eslint-disable-next-line @next/next/no-img-element -- user-uploaded chat media */}
        <img
          src={url}
          alt="shared image"
          className="max-h-56 max-w-full rounded-lg border border-white/10 object-contain"
        />
      </a>
    );
  }
  if (type?.startsWith("video/")) {
    return (
      <video src={url} controls className="mt-1.5 max-h-56 max-w-full rounded-lg border border-white/10" />
    );
  }
  if (type?.startsWith("audio/")) {
    return <audio src={url} controls className="mt-1.5 w-56" />;
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="mt-1.5 inline-block rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-bold hover:bg-white/10"
    >
      📎 Attachment — open ↗
    </a>
  );
}
