import "../sass/style.scss";

// TYPING ANIMATION IN FIRST VIEW //
let i = -4;
const text = "{ hello }.";
const speed = 160;
const spnCursor = document.querySelector(".first-view__typing-cursor");

window.onload = function typing() {
  if (i < text.length) {
    document.querySelector(
      ".first-view__typing-text"
    ).textContent += text.charAt(i);
    i++;
    setTimeout(typing, speed);
  }
};

const cursorAnimation = () => {
  spnCursor.classList.toggle("first-view__typing-cursor--active");
};
setInterval(cursorAnimation, 450);

////// HAMBURGER ///
const hamburger = document.querySelector(".menu__hamburger");
const menu = document.querySelector(".menu__list");

function toggleHamburger() {
  hamburger.classList.toggle("menu__hamburger--on");
  menu.classList.toggle("menu__list--show");
}

hamburger.addEventListener("click", () => {
  toggleHamburger();
});

/// Scroll to top button //
const arrow = document.querySelector(".arrowUp");

window.addEventListener("scroll", () => {
  let top = window.scrollY;
  if (top >= 150) {
    arrow.style.right = "10px";
  } else {
    arrow.style.right = "-50px";
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
});

/// Smooth scroll to sections //
const links = document.querySelectorAll(".menu__link");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const liId = e.target.id;
    const topPosition = document.querySelector(`.${liId}`).offsetTop;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth"
    });

    toggleHamburger();
  });
});

/// See me works button
const button = document.querySelector(".first-view__introduce-button");
const portfolio = document.querySelector(".portfolio");
const portofilioPos = portfolio.offsetTop;

button.addEventListener("click", () => {
  window.scrollTo({
    top: portofilioPos,
    behavior: "smooth"
  });
});
