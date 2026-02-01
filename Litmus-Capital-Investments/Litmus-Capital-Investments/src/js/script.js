// Basic site JavaScript: mobile nav toggle + smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
  // Add a mobile menu toggle button if one does not exist
  var nav = document.querySelector('nav');
  if (nav) {
    var existingToggle = nav.querySelector('.menu-toggle');
    if (!existingToggle) {
      var menuBtn = document.createElement('button');
      menuBtn.className = 'menu-toggle';
      menuBtn.setAttribute('aria-label', 'Toggle navigation');
      menuBtn.textContent = '\u2630'; // hamburger
      // Place button at the start of the nav
      nav.insertBefore(menuBtn, nav.firstChild);
      var menuList = nav.querySelector('ul');
      menuBtn.addEventListener('click', function() {
        if (menuList) menuList.classList.toggle('open');
      });
    }
  }

  // Smooth scrolling for in-page anchor links
  var pageLinks = document.querySelectorAll('a[href^="#"]');
  pageLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      var targetId = link.getAttribute('href').slice(1);
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile menu after click (if open)
        var menuList = document.querySelector('nav ul');
        if (menuList && menuList.classList.contains('open')) menuList.classList.remove('open');
      }
    });
  });
});