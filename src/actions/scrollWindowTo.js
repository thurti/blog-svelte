export function scrollWindowTo(node, page_scroll) {
  if (typeof window !== "undefined") {
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    } else {
      window.scrollTo(0, page_scroll);
    }
  }
}
