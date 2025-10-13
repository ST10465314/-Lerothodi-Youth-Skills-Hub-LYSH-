document.addEventListener('DOMContentLoaded', () => {
  // Responsive navigation toggle
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Contact form confirmation (only on contact.html)
  const contactForm = document.getElementById('contactForm');
  const confirmation = document.getElementById('confirmation');
  if (contactForm && confirmation) {
    contactForm.addEventListener('submit', function(e) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        e.preventDefault();
      } else {
        e.preventDefault();
        confirmation.style.display = 'block';
        this.reset();
      }
    });
  }

  // Fade-in animation on scroll
  const fadeEls = document.querySelectorAll('.fade-in');
  const revealOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('animated');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
