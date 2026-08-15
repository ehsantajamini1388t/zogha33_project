(function () {
  const wrap = document.querySelector(".img_big_wrap");
  if (!wrap) return;

  const slides = Array.from(wrap.querySelectorAll(".img_big"));
  if (slides.length < 2) return;

  // کلون عکس اول برای ایجاد افکت بی‌نهایت
  const firstClone = slides[0].cloneNode(true);
  wrap.appendChild(firstClone);

  let dotsWrap = null;
  let scrollTimeout = null;

  function buildDots() {
    if (dotsWrap) return;
    dotsWrap = document.createElement("div");
    dotsWrap.className = "gallery_dots";
    slides.forEach((slide, i) => {
      const dot = document.createElement("span");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      });
      dotsWrap.appendChild(dot);
    });
    wrap.insertAdjacentElement("afterend", dotsWrap);
  }

  function removeDots() {
    if (dotsWrap) {
      dotsWrap.remove();
      dotsWrap = null;
    }
  }

  function setActiveDot(index) {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll("span").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
  }

  function getClosestIndex(items) {
    const rect = wrap.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    items.forEach((slide, i) => {
      const r = slide.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });
    return closestIndex;
  }

  wrap.addEventListener("scroll", () => {
    const allItems = Array.from(wrap.querySelectorAll(".img_big"));
    const idx = getClosestIndex(allItems);

    if (idx < slides.length) setActiveDot(idx);

    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (idx === slides.length) {
        wrap.style.scrollBehavior = "auto";
        slides[0].scrollIntoView({ inline: "center", block: "nearest" });
        wrap.style.scrollBehavior = "";
        setActiveDot(0);
      }
    }, 120);
  });

  function handleResize() {
  if (window.innerWidth < 992) {
    buildDots();
    wrap.style.scrollBehavior = "auto";
    slides[0].scrollIntoView({ inline: "center", block: "nearest" });
    wrap.style.scrollBehavior = "";
    setActiveDot(0);
  } else {
    removeDots();
  }
}

  handleResize();
  window.addEventListener("resize", handleResize);
})();