// MURUQ.THECH — site startup / helper functions
// This file is named game.js to match the five files in your existing SPCK project.
// It does not contain a game; it starts the software directory website.
document.addEventListener("DOMContentLoaded", () => {
  document.title = "MURUQ.THECH | Apps, Games & PC Software";

  // Smooth scrolling for the main navigation.
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const id = link.getAttribute("href");
      if (!id || id === "#") {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Small confirmation when a download link is selected.
  document.querySelectorAll(".download").forEach(link => {
    link.addEventListener("click", () => {
      // The link opens the publisher's website in a new tab.
      link.setAttribute("aria-label", `Open official download page for ${link.closest(".app-card")?.querySelector("h3")?.textContent || "software"}`);
    });
  });
});
