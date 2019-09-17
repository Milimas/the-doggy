const elements = document.querySelectorAll(".animate");

observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `animate 1.5s ${entry.target.dataset.delay}s forwards ease-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});
elements.forEach(element => {
  observer.observe(element);
});
