
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href="#games"]').forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault();

      const button = document.querySelector(
        '#filters [data-filter="Games"]'
      );

      const section = document.getElementById("apps");

      if (button) button.click();

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });
});
