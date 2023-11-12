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
const menuArrow = document.querySelector(".menu-drop");
const menuLinkColor = document.querySelector(".menu-item");

dropButton.addEventListener("click", () => {
  menuDrop.classList.toggle("active");
  menuArrow.classList.toggle("active");
  menuLinkColor.classList.toggle("active");
  menuSearch.classList.remove("active");
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

/***********search***********/
const buttonSearch = document.querySelector(".button-search");
const menuSearch = document.querySelector(".search__menu");

buttonSearch.addEventListener("click", () => {
  menuSearch.classList.toggle("active");
  menuDrop.classList.remove("active");
  resultSearch.classList.remove("active");
});

const resulBtnSearch = document.querySelector(".button-search-menu");
const resultSearch = document.querySelector(".search__result");

resulBtnSearch.addEventListener("click", () => {
  resultSearch.classList.add("active");
});
