// MURUQ.THECH — search and filter controls
window.MURUQ = window.MURUQ || {};
window.MURUQ.activeFilter = "all";
window.MURUQ.searchTerm = "";

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("searchInput");
  const clear = document.getElementById("clearSearch");

  if (search) {
    search.addEventListener("input", () => {
      window.MURUQ.searchTerm = search.value.trim().toLowerCase();
      if (window.MURUQ.renderCatalog) {
        window.MURUQ.renderCatalog();
      }
    });
  }

  if (clear && search) {
    clear.addEventListener("click", () => {
      search.value = "";
      window.MURUQ.searchTerm = "";
      search.focus();

      if (window.MURUQ.renderCatalog) {
        window.MURUQ.renderCatalog();
      }
    });
  }

  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      window.MURUQ.activeFilter = button.dataset.filter || "all";

      document.querySelectorAll(".filter").forEach(item => {
        item.classList.toggle("active", item === button);
      });

      if (window.MURUQ.renderCatalog) {
        window.MURUQ.renderCatalog();
      }
    });
  });

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
});
