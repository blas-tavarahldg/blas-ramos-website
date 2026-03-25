// blasramosv9Final - Main JavaScript
// Combined from 4 original script blocks

// === Script 1: Loader, Cursor, Nav, Scroll Reveal, Smooth Scroll ===
(function () {
  // === LOADER ===
  var _loaderStart = Date.now();
  window.addEventListener('load', function() {
    var elapsed   = Date.now() - _loaderStart;
    var minShow   = 4200; /* 1.5× the 2.8s animation */
    var remaining = Math.max(600, minShow - elapsed);
    setTimeout(function() {
      var el = document.getElementById('loader');
      if (el) el.classList.add('done');
    }, remaining);
  });;

  // === CUSTOM CURSOR ===
  var dot  = document.getElementById('cursorDot');
  var ring = document.getElementById('cursorRing');
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (dot) { dot.style.left = (mx - 4) + 'px'; dot.style.top = (my - 4) + 'px'; }
  });

  function animateRing() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    if (ring) { ring.style.left = (rx - 18) + 'px'; ring.style.top = (ry - 18) + 'px'; }
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll('a, button, .story-card, .topic-card').forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      if (ring) { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(229,34,53,0.3)'; }
      if (dot)  { dot.style.transform = 'scale(1.8)'; }
    });
    el.addEventListener('mouseleave', function () {
      if (ring) { ring.style.width = '36px'; ring.style.height = '36px'; ring.style.borderColor = 'var(--red)'; }
      if (dot)  { dot.style.transform = 'scale(1)'; }
    });
  });

  // === NAV SCROLL ===
  var nav = document.getElementById('mainNav');
  window.addEventListener('scroll', function () {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });

  // === HAMBURGER ===
  var hamburger  = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobileMenu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  window.closeMobile = function () {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (hamburger)  { hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', 'false'); }
    document.body.style.overflow = '';
  };

  // === SCROLL REVEAL ===
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }


  // === SMOOTH SCROLL ===
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        var offset = nav ? nav.offsetHeight : 0;
        var top    = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // === SCROLL TO #connect IF REDIRECTED ===
  if (window.location.search.indexOf('contact=') > -1) {
    setTimeout(function () {
      var section = document.getElementById('connect');
      if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
  }
}());


// === Script 2: Role Tag Rotation ===
(function() {
  var tags = document.querySelectorAll('#aboutRoles .about-role-tag');
  if (!tags.length) return;
  var current = 0;
  var redIndices = [2, 4];
  setInterval(function() {
    tags[current].classList.remove('active', 'active-red');
    current = (current + 1) % tags.length;
    var cls = redIndices.indexOf(current) >= 0 ? 'active-red' : 'active';
    tags[current].classList.add(cls);
  }, 1800);
})();


// === Script 3: Story Filtering ===
document.addEventListener('DOMContentLoaded', function() {
  var filterBtns = document.querySelectorAll('.story-filter-btn');
  var stories    = document.querySelectorAll('.story-full');
  if (!filterBtns.length || !stories.length) return;
  filterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      filterBtns.forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');
      stories.forEach(function(article) {
        var cat = article.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          article.classList.remove('story-hidden');
        } else {
          article.classList.add('story-hidden');
        }
      });
    });
  });
});


// === Script 4: Contact Form ===
function handleContactForm(e) {
  e.preventDefault();
  var form = document.getElementById('contact-form');
  var name = form.querySelector('[name="contact_name"]').value.trim();
  var email = form.querySelector('[name="contact_email"]').value.trim();
  if (!name || !email) return;
  form.style.display = 'none';
  document.getElementById('contact-success').style.display = 'block';
}

