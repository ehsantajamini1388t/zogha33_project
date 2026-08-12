const over_text = document.querySelectorAll(".over_text");
const btn_daltise = document.querySelectorAll(".main_btn_more_details");

for (let index = 0; index < over_text.length; index++) {
    btn_daltise[index].addEventListener("click", () => {

        over_text[index].classList.toggle("not_after");

        let glag = over_text[index].classList.toggle("clickk");

        if (glag) {
            btn_daltise[index].textContent = "نمایش کمتر -";
        } else {
            btn_daltise[index].textContent = "نمایش بیشتر +";
        }
    });
}



const open_p = document.querySelectorAll(".q");
const open_clic_item = document.querySelectorAll(".open_cleck_item");
const rotate_icon = document.querySelectorAll(".rotatee");

for (let index = 0; index < open_p.length; index++) {

    open_p[index].addEventListener("click", () => {

        const wasActive =
            open_clic_item[index].classList.contains("active");

        open_clic_item.forEach((item) => {
            item.classList.remove("active");
        });

        rotate_icon.forEach((icon) => {
            icon.classList.remove("rotate");
        });

        open_p.forEach((p) => {
            p.querySelectorAll(".bg_color").forEach((bg) => {
                bg.classList.remove("color");
            });
        });

        if (wasActive === false) {

            open_clic_item[index].classList.add("active");

            rotate_icon[index].classList.add("rotate");

            open_p[index]
                .querySelectorAll(".bg_color")
                .forEach((el) => {
                    el.classList.add("color");
                });
        }
    });
}



const item_jump = document.querySelectorAll(".flex_icon");

const sections = document.querySelectorAll(
    "#description, #specifications, #Viewpoint, #Questions"
);

if (item_jump.length > 0) {
    item_jump[0].classList.add("jump");
}

const top1 = new Array(4);
const bottom1 = new Array(4);


function remove_border() {

    item_jump.forEach((element) => {
        element.classList.remove("jump");
    });
}


function a() {

    sections.forEach((element, index) => {

        top1[index] = element.offsetTop - 100;

        bottom1[index] =
            top1[index] + element.offsetHeight;
    });
}


a();


window.addEventListener("scroll", () => {

    a();

    if (
        window.scrollY >= top1[0] &&
        window.scrollY < bottom1[0]
    ) {
        remove_border();
        item_jump[0].classList.add("jump");
    }

    if (
        window.scrollY >= top1[1] &&
        window.scrollY < bottom1[1]
    ) {
        remove_border();
        item_jump[1].classList.add("jump");
    }

    if (
        window.scrollY >= top1[2] &&
        window.scrollY < bottom1[2]
    ) {
        remove_border();
        item_jump[2].classList.add("jump");
    }

    if (
        window.scrollY >= top1[3] &&
        window.scrollY < bottom1[3]
    ) {
        remove_border();
        item_jump[3].classList.add("jump");
    }
});


window.addEventListener("resize", a);



let meno_h = document.getElementById("meno_h");
let op_and_menu = document.getElementById("op_and_menu");
let btn_close = document.getElementById("close");


if (meno_h && op_and_menu && btn_close) {

    meno_h.addEventListener("click", () => {

        op_and_menu.classList.add("show_menu");

        document.body.classList.add("no_scoroll");

        document.documentElement.classList.add("no_scoroll");
    });


    btn_close.addEventListener("click", () => {

        op_and_menu.classList.remove("show_menu");

        document.body.classList.remove("no_scoroll");

        document.documentElement.classList.remove("no_scoroll");
    });
}



document.addEventListener("DOMContentLoaded", function () {

    const mybutton =
        document.getElementById("scrollToTopBtn");

    if (!mybutton) return;


    window.addEventListener("scroll", function () {

        if (
            document.body.scrollTop > 300 ||
            document.documentElement.scrollTop > 300
        ) {

            mybutton.classList.add("show");

        } else {

            mybutton.classList.remove("show");
        }
    });


    mybutton.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});


(function () {
  const wrap = document.querySelector(".img_big_wrap");
  if (!wrap) return;

  const slides = Array.from(wrap.querySelectorAll(".img_big"));
  let dotsWrap = null;

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

  function getClosestIndex() {
    const rect = wrap.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
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
    setActiveDot(getClosestIndex());
  });

  function handleResize() {
    window.innerWidth < 992 ? buildDots() : removeDots();
  }

  handleResize();
  window.addEventListener("resize", handleResize);
})();
const over_text = document.querySelectorAll(".over_text");
const btn_daltise = document.querySelectorAll(".main_btn_more_details");
for (let index = 0; index < over_text.length; index++) {
  btn_daltise[index].addEventListener("click", () => {
    over_text[index].classList.toggle("not_after");
    let glag = over_text[index].classList.toggle("clickk");
    if (glag) {
      btn_daltise[index].textContent = "نمایش کمتر -";
    } else {
      btn_daltise[index].textContent = "نمایش بیشتر +";
    }
  });
}



const open_p = document.querySelectorAll(".q");
const open_clic_item = document.querySelectorAll(".open_cleck_item");
const rotate_icon = document.querySelectorAll(".rotatee");

for (let index = 0; index < open_p.length; index++) {
  open_p[index].addEventListener("click", () => {
    const wasActive = open_clic_item[index].classList.contains("active");

    open_clic_item.forEach((item) => item.classList.remove("active"));
    rotate_icon.forEach((icon) => icon.classList.remove("rotate"));
    open_p.forEach((p) => {
      p.querySelectorAll(".bg_color").forEach((bg) =>
        bg.classList.remove("color"),
      );
    });

    if (wasActive == false) {
      open_clic_item[index].classList.add("active");
      rotate_icon[index].classList.add("rotate");
      open_p[index]
        .querySelectorAll(".bg_color")
        .forEach((el) => el.classList.add("color"));
    }
  });
}




const item_jump = document.querySelectorAll(".flex_icon");
const sections = document.querySelectorAll(
  "#description, #specifications, #Viewpoint, #Questions",
);
item_jump[0].classList.add("jump");
const top1 = new Array(4);
const bottom1 = new Array(4);
function remove_border() {
  item_jump.forEach((element) => {
    element.classList.remove("jump");
  });
}
function a() {
  sections.forEach((element, index) => {
    top1[index] = element.offsetTop - 100;
    bottom1[index] = top1[index] + element.offsetHeight;
  });
}
window.addEventListener("scroll", () => {
  a();
  if (window.scrollY >= top1[0] && window.scrollY < bottom1[0]) {
    remove_border();
    item_jump[0].classList.add("jump");
  }
  if (window.scrollY >= top1[1] && window.scrollY < bottom1[1]) {
    remove_border();
    item_jump[1].classList.add("jump");
  }
  if (window.scrollY >= top1[2] && window.scrollY < bottom1[2]) {
    remove_border();
    item_jump[2].classList.add("jump");
  }
  if (window.scrollY >= top1[3] && window.scrollY < bottom1[3]) {
    remove_border();
    item_jump[3].classList.add("jump");
  }
});
window.addEventListener("resize", a());

let meno_h = document.getElementById("meno_h");
let op_and_menu = document.getElementById("op_and_menu");
let btn_close = document.getElementById("close");
meno_h.addEventListener("click", () => {
  op_and_menu.classList.add("show_menu");
  document.body.classList.add("no_scoroll");
  document.documentElement.classList.add("no_scoroll");
});
btn_close.addEventListener("click", () => {
  op_and_menu.classList.remove("show_menu");
  document.body.classList.remove("no_scoroll");
  document.documentElement.classList.remove("no_scoroll");
});




document.addEventListener("DOMContentLoaded", function () {
  const mybutton = document.getElementById("scrollToTopBtn");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      mybutton.classList.add("show");
    } else {
      mybutton.classList.remove("show");
    }
  };

  mybutton.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
});


(function () {
  const wrap = document.querySelector(".img_big_wrap");
  if (!wrap) return;

  const slides = Array.from(wrap.querySelectorAll(".img_big"));
  let dotsWrap = null;

  function sizeSlides() {
    if (window.innerWidth >= 768) return;
    const style = getComputedStyle(wrap);
    const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const w = wrap.clientWidth - paddingX;
    slides.forEach((slide) => {
      slide.style.width = w + "px";
      slide.style.maxWidth = w + "px";
    });
  }

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
    slides.forEach((slide) => {
      slide.style.width = "";
      slide.style.maxWidth = "";
    });
  }

  function setActiveDot(index) {
    if (!dotsWrap) return;
    dotsWrap.querySelectorAll("span").forEach((d, i) => {
      d.classList.toggle("active", i === index);
    });
  }

  function getClosestIndex() {
    const rect = wrap.getBoundingClientRect();
    const center = rect.left + rect.width / 2;
    let closestIndex = 0;
    let closestDist = Infinity;
    slides.forEach((slide, i) => {
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
    setActiveDot(getClosestIndex());
  });

  function handleResize() {
    if (window.innerWidth < 768) {
      buildDots();
      sizeSlides();
    } else {
      removeDots();
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
})();

function sizeSlides() {
  if (window.innerWidth >= 768) return;
  const style = getComputedStyle(wrap);
  const paddingX = parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
  const w = Math.floor(wrap.clientWidth - paddingX); // فقط این خط با Math.floor
  slides.forEach((slide) => {
    slide.style.width = w + "px";
    slide.style.maxWidth = w + "px";
  });
}
