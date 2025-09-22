document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan animasi fade-in ke konten
  const fadeElements = document.querySelectorAll(".fade-in");

  fadeElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("show");
    }, 300 * index);
  });

  // Efek klik link
  const links = document.querySelectorAll(".content a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      alert(`Anda membuka: ${link.textContent}`);
    });
  });
});
