
window.MURUQ = window.MURUQ || {};

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#games"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const button = document.querySelector(
        '.filter[data-filter="games"]'
      );

      const catalog = document.getElementById("catalog");

      if (button) button.click();

      if (catalog) {
        catalog.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
