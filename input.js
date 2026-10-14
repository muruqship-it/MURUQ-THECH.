(() => {
  "use strict";
  window.MURUQ = window.MURUQ || {};
  window.MURUQ.searchTerm = window.MURUQ.searchTerm || "";
  window.MURUQ.activeFilter = window.MURUQ.activeFilter || "all";

  document.addEventListener("DOMContentLoaded", () => {
    const search = document.getElementById("searchInput");
    const form = document.getElementById("searchForm");
    const clear = document.getElementById("clearSearch");
    const buttons = [...document.querySelectorAll("[data-filter]")];
    const reset = document.getElementById("resetButton");
    const emptyReset = document.getElementById("emptyReset");

    function render() {
      if (typeof window.MURUQ.renderCatalog === "function") window.MURUQ.renderCatalog();
    }
    function applyFilter(value) {
      window.MURUQ.activeFilter = value || "all";
      buttons.forEach(button => button.classList.toggle("active", button.dataset.filter === window.MURUQ.activeFilter));
      render();
    }
    if (search) search.addEventListener("input", () => { window.MURUQ.searchTerm = search.value; render(); });
    if (form) form.addEventListener("submit", event => { event.preventDefault(); window.MURUQ.searchTerm = search ? search.value : ""; render(); });
    if (clear && search) clear.addEventListener("click", () => { search.value = ""; window.MURUQ.searchTerm = ""; search.focus(); render(); });
    buttons.forEach(button => button.addEventListener("click", () => applyFilter(button.dataset.filter)));
    [reset, emptyReset].filter(Boolean).forEach(button => button.addEventListener("click", () => {
      if (search) search.value = "";
      window.MURUQ.searchTerm = "";
      applyFilter("all");
    }));
  });
})();
