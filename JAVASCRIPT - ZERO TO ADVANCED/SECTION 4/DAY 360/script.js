
  const lazyImages = document.querySelectorAll(".lazy-image");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;     // load real image
        observer.unobserve(img);       // stop observing
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));

