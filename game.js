
(function () {
  function setupPage() {
    const year = document.getElementById("year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    document.querySelectorAll('a[href="#catalog"]').forEach(function (link) {
      link.addEventListener("click", function () {
        const catalog = document.getElementById("catalog");

        if (catalog) {
          catalog.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupPage);
  } else {
    setupPage();
  }
})();
