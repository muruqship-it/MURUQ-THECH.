(() => {
  "use strict";
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menuBtn");
    const nav = document.getElementById("navLinks");
    if (menuButton && nav) {
      menuButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.textContent = isOpen ? "✕" : "☰";
      });
      nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.textContent = "☰";
      }));
    }
  });
})();
