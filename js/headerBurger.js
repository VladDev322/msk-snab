const burger = document.querySelector('.header__burger');
const burgerMenu = document.querySelector('.burger__menu');
const burgerLink = document.querySelectorAll('.burger__menu-link');
const dark = document.querySelector('.dark-screen');

function burgerToggle() {
  burgerMenu.classList.toggle('burger__menu--open');
  burger.classList.toggle('header__burger--rotate');
  dark.classList.toggle('dark-screen--active');
  document.body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', burgerToggle);
dark.addEventListener("click", function () {
  if (burgerMenu.classList.contains('burger__menu--open')) burgerToggle();
})
burgerLink.forEach(link => link.addEventListener("click", burgerToggle));
