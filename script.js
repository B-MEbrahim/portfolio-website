/* =========================================================
   Mahmoud — portfolio behaviour
   Vanilla JS, no dependencies.
  Smooth scroll for nav links (JS fallback + focus handling)
   ========================================================= */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1. Nav smooth scroll
     CSS scroll-behavior does most of this; this adds keyboard
     focus handling so tabbing continues from the new section.
     --------------------------------------------------------- */
  document.querySelectorAll('.nav a[href^="#"], .btn[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var target = document.querySelector(link.getAttribute('href'));
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start'
      });

      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });

      if (history.replaceState) {
        history.replaceState(null, '', link.getAttribute('href'));
      }
    });
  });

})();
