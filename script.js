 // Add/Remove a class when the user scrolls
(function(){
  const nav = document.getElementById('navbar');

  // Efficient scroll handler using rAF
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.scrollY > 10;
        nav.classList.toggle('scrolled', scrolled);
        ticking = false;
      });
      ticking = true;
    }
  });

  // OPTIONAL: mark the current page’s link as active
  // Works across pages when you use real hrefs like about.html
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(a => {
    const target = a.getAttribute('href');
    if (target === here) a.classList.add('active');
  });
})();
