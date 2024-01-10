const navMobileMenuContainer = document.querySelector('#nav-mobile-menu');
const navMobileMenu = document.querySelector('#nav-mobile-menu nav');
const navMobileMenuOpenButton = document.querySelector('#nav-mobile-menu-button');
const navMobileMenuCloseButton = document.querySelector('#nav-mobile-menu button');

window.addEventListener('resize', () => {
  if(window.innerWidth > 575 && navMobileMenuContainer.classList.contains('d-flex'))
    closeNavMobileMenu(false);
});
navMobileMenuContainer.addEventListener('click', function(e) {
  closeNavMobileMenu(true);
});
navMobileMenu.addEventListener('click', e => {
  e.stopPropagation();
});
navMobileMenuOpenButton.addEventListener('click', openNavMobileMenu);
navMobileMenuCloseButton.addEventListener('click', () => {
  closeNavMobileMenu(true);
});

function openNavMobileMenu() {
  if(window.innerWidth < 576) {
    navMobileMenuContainer.classList.remove('d-none');
    navMobileMenuContainer.classList.add('d-flex');
    setTimeout(() => {
      navMobileMenu.classList.remove('nav-mobile-menu-closed');
      navMobileMenu.classList.add('nav-mobile-menu-opened');
    }, 0);
  }
}

function closeNavMobileMenu(transition) {
  if(transition) {
    navMobileMenu.classList.remove('nav-mobile-menu-opened');
    navMobileMenu.classList.add('nav-mobile-menu-closed');
    setTimeout(() => {
      navMobileMenuContainer.classList.remove('d-flex');
      navMobileMenuContainer.classList.add('d-none');
    }, 300);
  } else {
    navMobileMenuContainer.classList.remove('d-flex');
    navMobileMenuContainer.classList.add('d-none');
    navMobileMenu.classList.remove('nav-mobile-menu-opened');
    navMobileMenu.classList.add('nav-mobile-menu-closed');
  }
}