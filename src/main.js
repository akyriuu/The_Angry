import { siteConfig } from "./config.js";

function applyConfig() {
  document.querySelectorAll("[data-config]").forEach((element) => {
    const key = element.dataset.config;
    const value = key.split(".").reduce((obj, part) => obj?.[part], siteConfig);

    if (value == null) return;

    if (element.tagName === "A" && key.startsWith("links.")) {
      element.href = value;
      return;
    }
    if (element.tagName === "IMG" && key.startsWith("images.")) {
      element.src = value;
      return;
    }
    element.textContent = value;
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener(
    "scroll",
    () => {
      header.style.background =
        window.scrollY > 40
          ? "rgba(10, 10, 10, 0.95)"
          : "rgba(10, 10, 10, 0.85)";
    },
    { passive: true },
  );
}

applyConfig();
initHeaderScroll();
