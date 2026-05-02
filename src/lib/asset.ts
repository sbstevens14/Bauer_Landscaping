const basePath =
  process.env.NODE_ENV === "production" ? "/Bauer_Landscaping" : "";

export function asset(path: string): string {
  return `${basePath}${path.startsWith("/") ? path : `/${path}`}`;
}
