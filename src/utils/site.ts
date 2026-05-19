export function withBase(path: string) {
  const base = import.meta.env.BASE_URL ?? "/";
  const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (path === "/") return `${cleanBase}/`;
  return `${cleanBase}${path.startsWith("/") ? path : `/${path}`}`;
}
