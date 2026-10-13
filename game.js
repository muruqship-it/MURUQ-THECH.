
window.MURUQ = window.MURUQ || {};

window.MURUQ.initGames = function() {
  const gameButton = document.querySelector('.filter[data-filter="games"]');

  if (!gameButton) return;

  gameButton.addEventListener("dblclick", () => {
    document.getElementById("catalog")?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  window.MURUQ.initGames();

  document.querySelectorAll('a[href="#games"]').forEach(link => {
    link.addEventListener("click", () => {
      const gameButton = document.querySelector('.filter[data-filter="games"]');

      if (gameButton) {
        gameButton.click();
      }
    });
  });
});
