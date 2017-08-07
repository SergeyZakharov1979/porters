var toggleMenu = document.querySelector('.main-header__toggle-menu');
var iconMenu = document.querySelector('.main-header__toggle-menu--close');
var mobileMenu = document.querySelector('.main-navigation');

mobileMenu.classList.remove('main-navigation--header-nojs');
mobileMenu.classList.add('main-navigation--header-off');

toggleMenu.addEventListener('click', function(event){
  event.preventDefault();
  if (iconMenu.classList.contains('main-header__toggle-menu--close')) {
    iconMenu.classList.remove('main-header__toggle-menu--close');
    iconMenu.classList.add('main-header__toggle-menu--open');

    mobileMenu.classList.remove('main-navigation--header-off');
    mobileMenu.classList.add('main-navigation--header-on');
  }

  else {
    iconMenu.classList.remove('main-header__toggle-menu--open');
    iconMenu.classList.add('main-header__toggle-menu--close');

    mobileMenu.classList.remove('main-navigation--header-on');
    mobileMenu.classList.add('main-navigation--header-off');
  }
});
