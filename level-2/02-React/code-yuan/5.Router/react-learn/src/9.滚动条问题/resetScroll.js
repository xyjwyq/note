export default function resetScroll() {
  const html = document.documentElement;
  html.scrollTop = 0;
  html.scrollLeft = 0;
}
