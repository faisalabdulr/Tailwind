document.addEventListener("DOMContentLoaded", function () {
  // Toggle menu script
  const hamberger = document.querySelector("#hamberger");
  const navMenu = document.querySelector("#nav-menu");

  hamberger.addEventListener("click", function () {
    hamberger.classList.toggle("hamberger-active");
    navMenu.classList.toggle("hidden");
  });

  // Scroll event to add or remove fixed class on header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }
  });

  // Dark Mode toggle script
  const darkToggle = document.querySelector("#dark-toggle");
  const html = document.querySelector("html");

  darkToggle.addEventListener("click", function () {
    html.classList.toggle("dark", darkToggle.checked);
    localStorage.theme = darkToggle.checked ? "dark" : "light";
  });

  // Set initial state based on localStorage or system preference
  darkToggle.checked =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
});
