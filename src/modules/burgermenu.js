const burger = document.querySelector(".header__burger");
const header = document.querySelector(".header");
const headerMenuitem = document.querySelector(".header__menuitem");

burger.addEventListener("click", () => {
  document.body.classList.toggle("lock");
  header.classList.toggle("active");
  headerMenuitem.classList.toggle("active");
  burger.classList.toggle("active");
});
