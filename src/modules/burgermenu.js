const burger = document.querySelector(".header__burger");
const headerBody = document.querySelector(".header__body");

burger.addEventListener("click", (burgerMenuOpenHandler) => {
  burger.classList.toggle("active");
  headerBody.classList.toggle("active");
  document.body.classList.toggle("lock");
});
