// 1) Reveal-on-scroll with IntersectionObserver (performant)
(function revealOnScroll(){
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window) || !els.length) {
    // Fallback: show all
    els.forEach(el => el.classList.add("seen"));
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("seen");
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, threshold: 0.12 });
  els.forEach(el => io.observe(el));
})();
