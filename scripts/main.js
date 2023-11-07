window.onscroll = function showHeader() {
  let header = document.querySelector(".navigation");

  if (window.pageYOffset > 1080) {
    header.classList.add("header__fixed");
  } else {
    header.classList.remove("header__fixed");
  }
};
