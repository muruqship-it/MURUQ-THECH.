
window.MURUQ = window.MURUQ || {};

window.MURUQ.searchTerm = "";
window.MURUQ.activeFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const clearButton = document.getElementById("clearSearch");
  const filterButtons = document.querySelectorAll(".filter");
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      window.MURUQ.searchTerm = searchInput.value.trim().toLowerCase();

      if (typeof window.MURUQ.renderCatalog === "function") {
        window.MURUQ.renderCatalog();
      }
    });
  }

  if (clearButton && searchInput) {
    clearButton.addEventListener("click", () => {
      searchInput.value = "";
      window.MURUQ.searchTerm = "";
      searchInput.focus();

      if (typeof window.MURUQ.renderCatalog === "function") {
        window.MURUQ.renderCatalog();
      }
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      window.MURUQ.activeFilter = button.dataset.filter || "all";

      filterButtons.forEach(item => {
        item.classList.toggle("active", item === button);
      });

      if (typeof window.MURUQ.renderCatalog === "function") {
        window.MURUQ.renderCatalog();
      }
    });
  });
});
