// const tabItems = Array.from(document.querySelectorAll(".catalog-hover"));
// const formItems = Array.from(
//   document.querySelectorAll(".catalog__select-item")
// );

// const clearActiveTabs = (element, className = "active") => {
//   element.find((item) => item.classList.remove(`${className}`));
// };

// const setActiveTabs = (element, index, className = "active") => {
//   element[index].classList.add(`${className}`);
// };

// const chekTab = (item, index) => {
//   item.addEventListener("click", () => {
//     clearActiveTabs(tabItems);
//     clearActiveTabs(formItems);

//     setActiveTabs(tabItems, index);
//     setActiveTabs(formItems, index);
//   });
// };
// tabItems.forEach(chekTab);

/*****************************/

/***********search***********/
const buttonSearch = document.querySelector(".button-search");
const menuSearch = document.querySelector(".search__menu");

buttonSearch.addEventListener("click", () => {
  menuSearch.classList.toggle("active");
});

// const resulBtnSearch = document.querySelector(".button-search-menu");
// const resultSearch = document.querySelector(".search__result");

// resulBtnSearch.addEventListener("click", () => {
//   resultSearch.classList.toggle("active");
// });

// const resulBtnSearchM = document.querySelector(".button-search-menu-mob");
// const resultSearchM = document.querySelector(".search__result-mob");

// resulBtnSearch.addEventListener("click", () => {
//   resultSearch.classList.add("active");
// });

/***burger***/
function openMenu() {
  menuTab.classList.add("active");
}

function closeMenu() {
  menuTab.classList.remove("active");
}

const burgerOpen = document.getElementById("burgerOpen");
const menuTab = document.querySelector(".mobile-menu");
const burgerClose = document.querySelector(".mobile-menu__burger");

burgerOpen.addEventListener("click", openMenu);

burgerClose.addEventListener("click", closeMenu);
// const burgerOpen = document.getElementById("burgerOpen");
// const menuTab = document.querySelector(".mobile-menu");
// const burgerClose = document.querySelector(".mobile-menu__burger");

// burgerOpen.addEventListener("click", () => {
//   menuTab.classList.add("active");
// });

// burgerClose.addEventListener("click", () => {
//   menuTab.classList.remove("active");
// });

const catButton = document.querySelector(".mobile-menu__catalog");
const catMenuOpen = document.querySelector(".mobile-menu__catalog-list");
const buttonMobMen = document.querySelector(".mobile-footer__button-hidden");
const catArrow = document.querySelector(".mob-arrow");

catButton.addEventListener("click", () => {
  catMenuOpen.classList.toggle("active");
  buttonMobMen.classList.toggle("active");
  catArrow.classList.toggle("active");
});
/******/
function openPopup(popup) {
  popup.classList.toggle("active");
}
const btn1 = document.getElementById("tab1");
const list1 = document.querySelector(".list1");
const btn2 = document.getElementById("tab2");
const list2 = document.querySelector(".list2");

btn1.addEventListener("click", () => {
  openPopup(list1);
});
btn2.addEventListener("click", () => {
  openPopup(list2);
});

function openPopupL(popup) {
  popup.classList.toggle("active");
}
const filterBtn = document.querySelector(".catalog__filter");
const catalogList = document.querySelector(".catalog__popup");

filterBtn.addEventListener("click", () => {
  openPopupL(catalogList);
  openPopupL(filterBtn);
});
