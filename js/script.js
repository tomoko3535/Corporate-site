// ハンバーガーメニュー

const hamburger =
document.querySelector(".hamburger");

const nav =
document.querySelector("nav");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

  nav.classList.toggle("active");

});

// スライダー

const slides =
document.querySelectorAll(".slide");

let current = 0;

setInterval(() => {

  slides[current]
  .classList.remove("active");

  current =
  (current + 1) % slides.length;

  slides[current]
  .classList.add("active");

}, 3000);

// モーダル

const modal =
document.querySelector(".modal");

document
.getElementById("openModal")
.addEventListener("click", () => {

  modal.style.display = "block";

});

document
.querySelector(".close")
.addEventListener("click", () => {

  modal.style.display = "none";

});

// スクロールアニメーション

const fades =
document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

  fades.forEach(item => {

    const pos =
    item.getBoundingClientRect().top;

    if(pos < window.innerHeight - 100){

      item.classList.add("show");

    }

  });

});

// フォームチェック

document
.getElementById("contactForm")
.addEventListener("submit", (e) => {

  const name =
  document.getElementById("name").value;

  if(name === ""){

    alert("お名前を入力してください");

    e.preventDefault();

  }

});

// ダークモード

document
.getElementById("themeBtn")
.addEventListener("click", () => {

  document.body
  .classList.toggle("dark");

});