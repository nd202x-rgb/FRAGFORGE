"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Technique } from "@/lib/content";

function DifficultyMeter({ level, accent }: { level: number; accent: string }) {
  return (
    <span className="flex items-center gap-0.5" title={`Difficulty ${level}/5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className="h-1.5 w-3 rounded-full"
          style={{ backgroundColor: i <= level ? accent : "rgba(255,255,255,0.12)" }}
        />
      ))}
    </span>
  );
}

export function TechniqueCard({ technique, accent }: { technique: Technique; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="panel overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
      >
        <div>
          <div className="flex items-center gap-2">
            <span className="chip" style={{ borderColor: `${accent}55`, color: accent }}>
              {technique.category}
            </span>
            <DifficultyMeter level={technique.difficulty} accent={accent} />
          </div>
          <h3 className="mt-2 text-lg font-bold">{technique.name}</h3>
          <p className="mt-1 text-sm text-mist">{technique.summary}</p>
        </div>
        <span
          className="shrink-0 text-xl transition-transform"
          style={{ transform: open ? "rotate(45deg)" : undefined, color: accent }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <div className="border-t border-edge px-5 pb-5 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-mist">How to do it</h4>
              <ol className="mt-2 space-y-2 text-sm text-mist">
                {technique.steps.map((s, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-black text-void"
                      style={{ backgroundColor: accent }}
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-4 rounded-lg bg-white/[0.04] p-3 text-sm">
                <span className="font-bold" style={{ color: accent }}>
                  Pro tip:
                </span>{" "}
                <span className="text-mist">{technique.proTip}</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
