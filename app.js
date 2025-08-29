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
// 2) Minimal hero slider (autoplay + dots)
(function heroSlider(){
  const slider = document.querySelector(".slider");
  if (!slider) return;

  // Create 3 slides if only placeholder exists (demo)
  // Replace .slide innerHTML with your <img> later
  const dotsWrap = slider.querySelector(".dots");
  const dotEls = Array.from(dotsWrap.querySelectorAll(".dot"));
  let index = 0, timer = null, dur = 4000;

  function setActive(i){
    index = i % dotEls.length;
    dotEls.forEach((d, j) => d.classList.toggle("active", j === index));
    // Optional: could translate background position or swap images
    // For now, we just change placeholder text color for demo
    const slide = slider.querySelector(".slide");
    slide.style.background = index % 2 ? "#f0f5ff" : "#f5f7fa";
    slide.textContent = ["Hero Banner A","Hero Banner B","Hero Banner C"][index] || "Hero Banner";
  }

  function play(){
    stop();
    timer = setInterval(() => setActive(index + 1), dur);
  }
  function stop(){ if (timer) clearInterval(timer); }

  // dot click
  dotEls.forEach((d, i) => d.addEventListener("click", () => { setActive(i); play(); }));

  // pause on hover (desktop)
  slider.addEventListener("mouseenter", stop);
  slider.addEventListener("mouseleave", play);

  // start
  setActive(0);
  play();
})();
  
