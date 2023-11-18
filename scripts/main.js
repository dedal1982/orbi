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

const catButton = document.querySelector(".mobile-menu__catalog");
const catMenuOpen = document.querySelector(".mobile-menu__catalog-list");
const buttonMobMen = document.querySelector(".mobile-footer__button-hidden");
const catArrow = document.querySelector(".mob-arrow");

catButton.addEventListener("click", () => {
  catMenuOpen.classList.toggle("active");
  buttonMobMen.classList.toggle("active");
  catArrow.classList.toggle("active");
});

const menuSearch = document.querySelector(".search__menu");

document.querySelector(".white-button-search").onclick = function () {
  menuSearch.classList.toggle("active");
};
const resultSearch = document.querySelector(".search__result");

document.querySelector(".button-search-menu").onclick = function () {
  resultSearch.classList.toggle("active");
};

document.querySelector(".button-search").onclick = function () {
  menuSearch.classList.toggle("active");
};

const catalogList = document.querySelector(".catalog__popup");
document.querySelector(".catalog__filter").onclick = function () {
  catalogList.classList.toggle("active");
};

const list1 = document.querySelector(".list1");
document.getElementById("tab1").onclick = function () {
  list1.classList.toggle("active");
};

const list2 = document.querySelector(".list2");
document.getElementById("tab2").onclick = function () {
  list2.classList.toggle("active");
};
