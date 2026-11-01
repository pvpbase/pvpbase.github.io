import("./modules/countdown.js");
import("./modules/animations.js");

const loader = document.querySelector("[data-loader]");
const hideLoader = () => loader?.classList.add("is-hidden");

window.addEventListener("load", () => window.setTimeout(hideLoader, 420), { once: true });
window.setTimeout(hideLoader, 1800);

// Initialize Lucide icons after the DOM is ready.
if (window.lucide) window.lucide.createIcons();
