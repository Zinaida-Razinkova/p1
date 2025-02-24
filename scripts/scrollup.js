document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".footer__scrollup");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollButton.style.opacity = "1";
      scrollButton.style.pointerEvents = "auto";
    } else {
      scrollButton.style.opacity = "0";
      scrollButton.style.pointerEvents = "none";
    }
  });

  scrollButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
