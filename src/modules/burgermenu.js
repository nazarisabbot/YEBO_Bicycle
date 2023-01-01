const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const headerMenuitem = document.querySelector(".header__menuitem");
const headerLinks = document.querySelectorAll(".header__link");

burger.addEventListener("click", () => {
  document.body.classList.toggle("lock");
  header.classList.toggle("active");
  headerMenu.classList.toggle("active");
  headerMenuitem.classList.toggle("active");
  burger.classList.toggle("active");
  addClassActiveLi();
});

function addClassActiveLi() {
  headerLinks.forEach((item) => {
    item.classList.toggle("active");
  });
}
