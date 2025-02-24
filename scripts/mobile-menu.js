(() => {
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const mobileMenu = document.querySelector("[data-menu]");

  openMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("is-open");
    document.body.classList.add("backdrop__show");
    openMenuBtn.setAttribute("aria-expanded", true);
  });

  closeMenuBtn.addEventListener("click", () => {
    closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.contains(event.target) &&
      !openMenuBtn.contains(event.target) &&
      !closeMenuBtn.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && mobileMenu.classList.contains("is-open")) {
      closeMenu();
    }
  });

  function closeMenu() {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("backdrop__show");
    openMenuBtn.setAttribute("aria-expanded", false);
  }
})();
