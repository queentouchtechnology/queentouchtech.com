(function () {
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href]');
    if (!el) return;
    var href = el.getAttribute('href') || '';
    if (!/contact/i.test(href)) return;
    if (typeof gtag !== 'function') return;
    gtag('event', 'cta_click', {
      event_category: 'engagement',
      link_text: (el.textContent || '').trim().slice(0, 100),
      link_url: href
    });
  }, true);
})();
