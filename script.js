const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) { toggle.addEventListener('click', () => links.classList.toggle('is-open')); links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => links.classList.remove('is-open'))); }

// Keep GitHub/Render image filenames exactly as uploaded (unnamed, unnamed (1), etc.).
const imageFileMap = {
  'palace-exterior.webp': 'unnamed (7).webp',
  'pool-courtyard.webp': 'unnamed.webp',
  'pool-wing.webp': 'unnamed (1).webp',
  'lawn-event.webp': 'unnamed (2).webp',
  'restaurant-wide.webp': 'unnamed (3).webp',
  'restaurant-window.webp': 'unnamed (4).webp',
  'suite-family.webp': 'unnamed (5).webp',
  'basil-night.webp': 'unnamed (6).webp',
  'villa-exterior.webp': 'unnamed (8).webp',
  'restaurant-lounge.webp': 'unnamed (9).webp',
  'wedding-entry.webp': 'unnamed (10).webp',
  'basil-day.webp': 'unnamed (11).webp',
  'suite-room.jpg': 'unnamed.jpg'
};
document.querySelectorAll('img[src^="assets/"]').forEach(image => {
  const currentFile = decodeURIComponent(image.getAttribute('src')).split('/').pop();
  if (imageFileMap[currentFile]) image.src = `assets/${encodeURIComponent(imageFileMap[currentFile])}`;
});

document.body.classList.add('is-loading');
const splash = document.querySelector('.splash');
window.addEventListener('load', () => setTimeout(() => { splash?.classList.add('done'); document.body.classList.remove('is-loading'); }, 1500));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold:.14 });
document.querySelectorAll('.reveal').forEach(item => observer.observe(item));

const topButton = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => topButton?.classList.toggle('show', window.scrollY > 620), { passive:true });
topButton?.addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));

const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
document.querySelectorAll('[data-lightbox]').forEach(photo => photo.addEventListener('click', () => { lightboxImage.src = photo.querySelector('img').src; lightboxImage.alt = photo.querySelector('img').alt; lightbox.classList.add('open'); }));
lightbox?.addEventListener('click', event => { if (event.target === lightbox || event.target.matches('button')) lightbox.classList.remove('open'); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') lightbox?.classList.remove('open'); });

document.querySelectorAll('form').forEach(form => form.addEventListener('submit', event => { event.preventDefault(); const button = form.querySelector('button'); button.textContent = 'Enquiry received'; button.disabled = true; }));
