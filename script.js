/* Simple shared script:
   - Responsive nav toggle
   - Smooth scroll for same-page anchors
   - Small helper to close menus when clicking outside
*/

(function () {
  // Toggle any nav menu with button
  function bindNav(toggleId, menuId) {
    const btn = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    btn.addEventListener('click', () => {
      menu.classList.toggle('open');
      // small inline mobile behaviour: toggle display
      if (menu.style.display === 'block') menu.style.display = '';
      else menu.style.display = 'block';
    });

    // close on outside click
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !btn.contains(e.target)) {
        menu.style.display = '';
      }
    });
  }

  // bind both navs (index and project page)
  bindNav('nav-toggle', 'nav-menu');
  bindNav('nav-toggle-2', 'nav-menu-2');

  // smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Make nav links to other pages behave normally (no interception)
})();
