// script.js
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  // Smooth scrolling
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    window.scroll({
      top: targetSection.offsetTop - 50,
      left: 0,
      behavior: 'smooth'
    });
  }

  // Parallax effect on home section
  window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    const parallax = document.querySelector('.section#home .content');
    parallax.style.backgroundPositionY = offset * 0.7 + 'px';
  });
});

