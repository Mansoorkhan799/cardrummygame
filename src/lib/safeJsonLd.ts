/** Escape `<` in JSON-LD to prevent script injection when embedding in HTML. */
export function safeJsonLd(obj: object): string {
  return JSON.stringify(obj).replace(/</g, "\\u003c");
}
