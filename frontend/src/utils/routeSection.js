export function getRouteSection(pathname) {
  if (pathname.startsWith("/meditate")) return "Meditate";
  if (pathname.startsWith("/care")) return "Care";
  if (pathname.startsWith("/dreams")) return "Dreams";
  if (pathname.startsWith("/arc")) return "Arc";
  if (pathname.startsWith("/journal")) return "Journal";
  return null;
}
