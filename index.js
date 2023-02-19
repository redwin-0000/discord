const sideMenubar = document.querySelector(".side-menu-bar");
const body = document.querySelector("body");
function menuToggler() {
  if (sideMenubar.classList.contains("translate-x-[650px]")) {
    sideMenubar.classList.remove("translate-x-[650px]");
    sideMenubar.classList.add("translate-x-0");
  } else {
    sideMenubar.classList.remove("translate-x-0");
    sideMenubar.classList.add("translate-x-[650px]");
  }
}