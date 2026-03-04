function openAt(i) {
  idx = i;
  const el = items[idx];
  const w960 = el.getAttribute("data-webp-960");
  const w1600 = el.getAttribute("data-webp-1600");
  const j960 = el.getAttribute("data-jpg-960");
  const j1600 = el.getAttribute("data-jpg-1600");
  lbWebp.srcset = w960 && w1600 ? `${w960} 960w, ${w1600} 1600w` : "";
  lbImg.srcset = j960 && j1600 ? `${j960} 960w, ${j1600} 1600w` : "";
  lbImg.sizes = "96vw";
  lb.classList.add("open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function close() {
  lb.classList.remove("open");
  lb.setAttribute("aria-hidden", "true");
  lbImg.src = "";
  lbImg.srcset = "";
  lbImg.sizes = "";
  lbWebp.srcset = "";
  document.body.style.overflow = "";
}

function prev() {
  openAt((idx - 1 + items.length) % items.length);
}

function next() {
  openAt((idx + 1) % items.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const items = Array.from(document.querySelectorAll("#gallery.gitem"));
  const lb = document.getElementById("lightbox");
  const btnClose = document.getElementById("lbClose");
  const btnPrev = document.getElementById("lbPrev");
  const btnNext = document.getElementById("lbNext");

  items.forEach((el, i) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      openAt(i);
    });
  });
  btnClose.addEventListener("click", close);
  btnPrev.addEventListener("click", prev);
  btnNext.addEventListener("click", next);

  lb.addEventListener("click", (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  });
});
