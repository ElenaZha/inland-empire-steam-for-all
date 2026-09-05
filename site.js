// Shared site behavior — reused identically across all pages.
// Toggles the mobile nav menu and keeps aria-expanded / aria-label / icon state in sync.
function toggleMobileMenu(btn) {
  var menu = document.getElementById('mobile-menu');
  if (!menu) return;
  var isOpen = menu.classList.toggle('is-open');
  btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  btn.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  var menuIcon = document.getElementById('nav-icon-menu');
  var closeIcon = document.getElementById('nav-icon-close');
  if (menuIcon && closeIcon) {
    menuIcon.style.display = isOpen ? 'none' : 'inline';
    closeIcon.style.display = isOpen ? 'inline' : 'none';
  }
}
