// Toggle Overlay
const overlay = document.querySelector(".overlay");

function openOverlay() {
  overlay.classList.add("overlay-active");
}

function closeOverlay() {
  overlay.classList.remove("overlay-active");
}

// Navigation Scroll
const nav = document.querySelector("#myNav");
const navTop = nav.offsetTop;

function stickyNavigation() {
  if (window.scrollY > navTop) {
    nav.classList.add("navbar-active");
  } else {
    nav.classList.remove("navbar-active");
  }
}
window.addEventListener("scroll", stickyNavigation);
