(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu-mobile]');
  const tabletMenuRef = document.querySelector('[data-menu-tablet]');
  const body = document.querySelector('body');
  const logo = document.querySelector('[logo]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    tabletMenuRef.classList.toggle('is-open');

    // body.classList.toggle('no-scroll');
    body.classList.toggle("body-fixed");
		logo.classList.toggle("logo-light");
		logo.classList.toggle("logo-landscape");
  });
})();