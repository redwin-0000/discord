const sideMenu = document.querySelector(".side-menu");
const body = document.querySelector("body");
function menuToggler() {
  if (sideMenu.classList.contains("translate-x-[650px]")) {
    sideMenu.classList.remove("translate-x-[650px]");

    sideMenu.classList.add("translate-x-0");
  } else {
    sideMenu.classList.remove("translate-x-0");
    sideMenu.classList.add("translate-x-[650px]");
  }
}