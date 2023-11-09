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

const tabItems = Array.from(
  document.querySelectorAll(".catalog__select-title")
);
const formItems = Array.from(
  document.querySelectorAll(".catalog__select-item")
);

const clearActiveTabs = (element, className = "active") => {
  element.find((item) => item.classList.remove(`${className}`));
};

const setActiveTabs = (element, index, className = "active") => {
  element[index].classList.add(`${className}`);
};

const chekTab = (item, index) => {
  item.addEventListener("click", () => {
    clearActiveTabs(tabItems);
    clearActiveTabs(formItems);

    setActiveTabs(tabItems, index);
    setActiveTabs(formItems, index);
  });
};
tabItems.forEach(chekTab);
