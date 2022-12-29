const burger = document.querySelector(".header__burger");
const headerRow = document.querySelector(".header__row");
const headerItems = document.querySelector(".header__items");

burger.addEventListener("click", () => {
  headerRow.classList.toggle("active");
  burger.classList.toggle("active");
  headerItems.classList.toggle("active");
  document.body.classList.toggle("lock");
});
