// OWNER / PRO badges shown next to usernames across the site.
export function RoleBadge({
  role,
  pro,
  className = "",
}: {
  role?: string | null;
  pro?: number | boolean | null;
  className?: string;
}) {
  if (role === "owner") {
    return (
      <span
        className={`chip border-mag/50 bg-mag/15 text-[10px] font-black tracking-wider text-mag ${className}`}
      >
        OWNER
      </span>
    );
  }
  if (pro) {
    return (
      <span
        className={`chip border-gold/40 bg-gold/10 text-[10px] font-black tracking-wider text-gold ${className}`}
      >
        PRO
      </span>
    );
  }
  return null;
}
