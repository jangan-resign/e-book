// Smooth scroll untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Pop-up notifikasi download untuk semua tombol
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("E-book gratis ini hanya bisa didownload di janganresign.fun ✨");
  });
});
