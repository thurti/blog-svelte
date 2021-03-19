export function scrollWindowTo(node, page_scroll) {
  if (typeof window !== "undefined") {
    window.scrollTo(0, page_scroll);
  }
}