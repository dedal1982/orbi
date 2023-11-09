// window.onscroll = function showHeader() {
//   let header = document.querySelector(".navigation");

//   if (window.pageYOffset > 1080) {
//     header.classList.add("header__fixed");
//   } else {
//     header.classList.remove("header__fixed");
//   }
// };
const dropButton = document.getElementById("menu-drop");
const menuDrop = document.querySelector(".header__menu");

dropButton.addEventListener("click", () => {
  menuDrop.classList.toggle("active");
});
