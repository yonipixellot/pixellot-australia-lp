/* ═══════════════════════════════════════════
   PIXELLOT AUSTRALIA LP – SCROLL ANIMATIONS
   ═══════════════════════════════════════════ */

gsap.registerPlugin(ScrollTrigger);

// Signal CSS that GSAP loaded – safe to set initial hidden states
document.documentElement.classList.add('gsap-ready');

/* ─── Scroll-triggered entrance animations ─── */
document.querySelectorAll('[data-animate]').forEach(el => {
  const type = el.dataset.animate;
  const delay = parseFloat(el.dataset.delay || 0);
  const props = { opacity: 0, duration: 1, ease: 'power3.out', delay };

  if (type === 'fade-up')    props.y = 50;
  if (type === 'fade-left')  props.x = 50;
  if (type === 'fade-right') props.x = -50;
  if (type === 'scale-up')   props.scale = 0.92;

  gsap.from(el, {
    ...props,
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  });
});

/* ─── Hero background parallax ─── */
const heroBg = document.querySelector('.hero__bg-img');
if (heroBg) {
  gsap.to(heroBg, {
    y: -120,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  });
}

/* ─── Hero title entrance ─── */
const heroTitle = document.querySelector('.hero__title');
if (heroTitle) {
  gsap.from(heroTitle, {
    opacity: 0, y: 50, scale: 0.95,
    duration: 1.3, ease: 'power3.out', delay: 0.2,
  });
}

/* ─── FIBA bar basketball parallax ─── */
const fibaBall = document.querySelector('.s-fiba__ball');
if (fibaBall) {
  gsap.to(fibaBall, {
    y: -50, rotation: -25, ease: 'none',
    scrollTrigger: {
      trigger: '.s-fiba',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  });
}

/* ─── Reasons basketball split parallax ─── */
const reasonsBall = document.querySelector('.s-reasons__ball');
if (reasonsBall) {
  gsap.to(reasonsBall, {
    y: 120, rotation: -8, ease: 'none',
    scrollTrigger: {
      trigger: '.s-reasons',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 2,
    },
  });
}

/* ─── Reason numbers – staggered bounce ─── */
document.querySelectorAll('.reason__num').forEach((el, i) => {
  gsap.from(el, {
    y: 40, opacity: 0, duration: 0.8,
    ease: 'back.out(1.7)',
    delay: i * 0.1,
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
  });
});

/* ─── Video play button pulse ─── */
const playBtn = document.querySelector('.s-video__play');
if (playBtn) {
  gsap.to(playBtn, {
    scale: 1.1, duration: 1.3, ease: 'power1.inOut',
    yoyo: true, repeat: -1, transformOrigin: '50% 50%',
  });
}

/* ─── Moment cards – image zoom on reveal ─── */
document.querySelectorAll('.s-moment__card img').forEach(img => {
  gsap.from(img, {
    scale: 1.2, duration: 1.5, ease: 'power2.out',
    scrollTrigger: { trigger: img.closest('.s-moment__card'), start: 'top 80%', once: true },
  });
});

/* ─── Benefit cards – image zoom on reveal ─── */
document.querySelectorAll('.s-auto__card img').forEach(img => {
  gsap.from(img, {
    scale: 1.15, duration: 1.4, ease: 'power2.out',
    scrollTrigger: { trigger: img.closest('.s-auto__card'), start: 'top 80%', once: true },
  });
});

/* ─── Footer tagline glow entrance ─── */
const footerCyan = document.querySelector('.footer__cyan');
if (footerCyan) {
  gsap.from(footerCyan, {
    opacity: 0, x: 40, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.footer', start: 'top 90%', once: true },
  });
}

/* ─── Navbar auto-hide on scroll ─── */
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  navbar.style.transform = y > 200 && y > lastScroll ? 'translateY(-100%)' : 'translateY(0)';
  lastScroll = y;
}, { passive: true });

/* ─── Marquee speed up on scroll ─── */
const marqueeTrack = document.querySelector('.marquee__track');
if (marqueeTrack) {
  ScrollTrigger.create({
    trigger: '.marquee',
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: self => {
      marqueeTrack.style.animationDuration = (35 - self.progress * 18) + 's';
    },
  });
}
