/* ================================================
   Juan Victor González – Portfolio JS
   ================================================ */

// Active nav link highlight on scroll
(function () {
  const sections  = document.querySelectorAll('.section');
  const navLinks  = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-30% 0px -65% 0px' });

  sections.forEach(s => observer.observe(s));
})();

// Smooth scroll for sidebar nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Mobile sidebar toggle
const menuToggle      = document.getElementById('menuToggle');
const sidebar         = document.getElementById('sidebar');
const sidebarOverlay  = document.getElementById('sidebarOverlay');

function closeSidebar () {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
}
function openSidebar () {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
}

menuToggle?.addEventListener('click', () => {
  sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
});

sidebarOverlay?.addEventListener('click', closeSidebar);

// Close sidebar when a nav link is clicked (mobile)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeSidebar);
});
