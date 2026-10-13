
(function () {
  function setupInputs() {
    const searchInput = document.getElementById("searchInput");
    const clearSearch = document.getElementById("clearSearch");
    const showAll = document.getElementById("showAll");
    const filters = document.querySelectorAll("[data-filter]");

    function applyFilter(category) {
      if (!window.MURUQ) return;

      window.MURUQ.activeFilter = category;

      filters.forEach(function (button) {
        const active = button.dataset.filter === category;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });

      if (typeof window.MURUQ.renderCatalog === "function") {
        window.MURUQ.renderCatalog();
      }
    }

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        if (!window.MURUQ) return;
        window.MURUQ.searchTerm = searchInput.value.trim();
        window.MURUQ.renderCatalog();
      });
    }

    if (clearSearch) {
      clearSearch.addEventListener("click", function () {
        if (searchInput) {
          searchInput.value = "";
          searchInput.focus();
        }

        if (window.MURUQ) {
          window.MURUQ.searchTerm = "";
          window.MURUQ.renderCatalog();
        }
      });
    }

    filters.forEach(function (button) {
      button.addEventListener("click", function () {
        applyFilter(button.dataset.filter);
      });
    });

    if (showAll) {
      showAll.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        if (window.MURUQ) window.MURUQ.searchTerm = "";
        applyFilter("all");
      });
    }

    document.querySelectorAll("[data-jump-filter]").forEach(function (link) {
      link.addEventListener("click", function () {
        applyFilter(link.dataset.jumpFilter);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupInputs);
  } else {
    setupInputs();
  }
})();
