// const dropButton = document.getElementById("menu-drop");
// const menuDrop = document.querySelector(".header__menu");
// const menuArrow = document.querySelector(".menu-drop");
// const menuLinkColor = document.querySelector(".menu-item");

// const navOuth = document.querySelector(".navigation");

// navOuth.addEventListener("click", () => {
//   menuDrop.classList.remove("active");
// });

const tabItems = Array.from(document.querySelectorAll(".catalog-hover"));
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
// const buttonSearch = document.querySelector(".button-search");
// const menuSearch = document.querySelector(".search__menu");

// buttonSearch.addEventListener("click", () => {
//   menuSearch.classList.toggle("active");
//   menuDrop.classList.remove("active");
//   resultSearch.classList.remove("active");
// });

// const resulBtnSearch = document.querySelector(".button-search-menu");
// const resultSearch = document.querySelector(".search__result");

// resulBtnSearch.addEventListener("click", () => {
//   resultSearch.classList.add("active");
// });

/***burger***/
const burgerOpen = document.getElementById("burgerOpen");
const menuTab = document.querySelector(".mobile-menu");
const burgerClose = document.querySelector(".mobile-menu__burger");

burgerOpen.addEventListener("click", () => {
  menuTab.classList.add("active");
});

burgerClose.addEventListener("click", () => {
  menuTab.classList.remove("active");
});

const catButton = document.querySelector(".mobile-menu__catalog");
const catMenuOpen = document.querySelector(".mobile-menu__catalog-list");
const buttonMobMen = document.querySelector(".mobile-footer__button-hidden");

catButton.addEventListener("click", () => {
  catMenuOpen.classList.toggle("active");
  menuArrow.classList.toggle("active");
  buttonMobMen.classList.toggle("active");
});
/******/
// const header = document.querySelector(".sticky-header");

// window.addEventListener("scroll", function () {
//   if (window.pageYOffset > 1000) {
//     header.classList.add("active");
//   } else {
//     header.classList.remove("active");
//   }
// });
/****/
