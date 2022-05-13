(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu-mobile]');
  const tabletMenuRef = document.querySelector('[data-menu-tablet]');
  const body = document.querySelector('body');
  const logo = document.querySelector('[data-logo]');
  const navLinks = document.querySelectorAll('.navigation__link');

  menuBtnRef.addEventListener('click', toogleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', toogleMenu);
  });

  function toogleMenu() {
    const viewPort = window.innerWidth;
    if (viewPort > 1365) {
      return;
    }

    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    tabletMenuRef.classList.toggle('is-open');

    body.classList.toggle('no-scroll');
    logo.classList.toggle('logo-light');
  }
})();
