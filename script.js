document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, 300 * index);
  });

  const links = document.querySelectorAll(".content a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      alert(`Anda membuka: ${link.textContent}`);
    });
  });
});
