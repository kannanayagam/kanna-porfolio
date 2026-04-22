/* =========================================
   Portfolio JavaScript
   ========================================= */

// ─────────────────────────────────────────
// Navbar: scroll effect & active link
// ─────────────────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateNavbar() {
  const scrollY = window.scrollY;

  // Scrolled style
  if (scrollY > 30) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Active section highlight
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// ─────────────────────────────────────────
// Mobile hamburger menu
// ─────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksContainer = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksContainer.classList.toggle('open');
});

// Close menu on nav link click
navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksContainer.classList.remove('open');
  });
});

// ─────────────────────────────────────────
// Typed text animation
// ─────────────────────────────────────────
const roles = [
  'Full Stack Developer',
  'Frontend Engineer',
  'Backend Developer',
  'React Enthusiast',
  'Problem Solver',
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typed-text');

function typeEffect() {
  const currentRole = roles[roleIndex];
  const speed = isDeleting ? 60 : 100;

  if (!isDeleting) {
    typedEl.textContent = currentRole.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1800);
      return;
    }
  } else {
    typedEl.textContent = currentRole.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, speed);
}

setTimeout(typeEffect, 800);

// ─────────────────────────────────────────
// Intersection Observer – reveal animations
// ─────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay based on position within siblings
        const siblings = Array.from(entry.target.parentElement.querySelectorAll('.reveal'));
        const delay = siblings.indexOf(entry.target) * 80;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ─────────────────────────────────────────
// Particles Canvas
// ─────────────────────────────────────────
(function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let particles = [];
  let width, height;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize);
  resize();

  function randomBetween(a, b) {
    return a + Math.random() * (b - a);
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = randomBetween(0, width);
      this.y = randomBetween(0, height);
      this.size = randomBetween(1, 2.5);
      this.speedX = randomBetween(-0.3, 0.3);
      this.speedY = randomBetween(-0.5, -0.1);
      this.opacity = randomBetween(0.1, 0.5);
      this.color = Math.random() > 0.5 ? '108, 99, 255' : '62, 207, 207';
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.opacity -= 0.0008;

      if (this.y < -10 || this.opacity <= 0) {
        this.reset();
        this.y = height + 10;
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
      ctx.fill();
    }
  }

  // Create particles
  const COUNT = 60;
  for (let i = 0; i < COUNT; i++) {
    const p = new Particle();
    p.y = randomBetween(0, height);
    particles.push(p);
  }

  // Draw connecting lines between nearby particles
  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          const alpha = (1 - dist / 100) * 0.12;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(108, 99, 255, ${alpha})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    drawConnections();
    requestAnimationFrame(animate);
  }

  animate();
})();

// ─────────────────────────────────────────
// Contact Form
// ─────────────────────────────────────────
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.querySelector('#name').value.trim();
    const email = contactForm.querySelector('#email').value.trim();
    const subject = contactForm.querySelector('#subject').value.trim();
    const message = contactForm.querySelector('#message').value.trim();

    if (!name || !email || !subject || !message) {
      return;
    }

    const btn = contactForm.querySelector('button[type="submit"]');
    const btnText = btn.querySelector('.btn-text');
    btnText.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate sending (replace with your backend/emailjs integration)
    setTimeout(() => {
      formSuccess.classList.add('show');
      contactForm.reset();
      btnText.textContent = 'Send Message';
      btn.disabled = false;

      setTimeout(() => {
        formSuccess.classList.remove('show');
      }, 5000);
    }, 1200);
  });
}

// ─────────────────────────────────────────
// Smooth scroll for anchor links
// ─────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─────────────────────────────────────────
// Project card mouse-follow glow
// ─────────────────────────────────────────
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.querySelector('.project-card-glow').style.background =
      `radial-gradient(circle at ${x}% ${y}%, rgba(108,99,255,0.4), rgba(62,207,207,0.2), transparent 70%)`;
  });
});
