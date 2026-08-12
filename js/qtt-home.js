/* Queen Touch Technology — homepage-only enhancements:
   header glass state on scroll + scroll-reveal (IntersectionObserver). */
(function () {
	var header = document.getElementById('header');
	if (header) {
		var onScroll = function () {
			if (window.scrollY > 40) {
				header.classList.add('qtt-header-scrolled');
			} else {
				header.classList.remove('qtt-header-scrolled');
			}
		};
		window.addEventListener('scroll', onScroll, { passive: true });
		onScroll();
	}

	var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var revealEls = document.querySelectorAll('.qtt-reveal, .qtt-reveal-stagger');

	if (reduceMotion || !('IntersectionObserver' in window)) {
		revealEls.forEach(function (el) { el.classList.add('qtt-in'); });
		return;
	}

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('qtt-in');
				observer.unobserve(entry.target);
			}
		});
	}, { rootMargin: '0px 0px -80px 0px', threshold: 0.05 });

	revealEls.forEach(function (el) { observer.observe(el); });
})();
