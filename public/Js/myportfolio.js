let home = document.querySelectorAll(".navigation__link");
let check = document.getElementById("nav-toggle");
console.log(check);

home.forEach(element => {
  element.addEventListener("click", e => {
    check.checked = false;
  });
});
let loadButton = document.querySelector(".load-button");
loadButton.addEventListener("click", function(e) {
  let portfolio = document.querySelector(".portfolio");

  portfolio.style.height = `${portfolio.scrollHeight}px`;

  loadButton.style.display = "none";
  portfolio.classList.remove("special-after");
});

// var i = 1;

// function changeBackground() {
//   i = i + 1;
//   if (i == 3) {
//     i = 1;
//   }
//   if (i == 2) {
//     document.querySelector(".header__hero-image").style.background =
//       "url('../img/hero-img-2.png') no-repeat center";
//     document.querySelector(".header__hero-image").style.backgroundSize =
//       "contain";
//   }
//   if (i == 1) {
//     document.querySelector(".header__hero-image").style.background =
//       "url('../img/hero-img-1.png') no-repeat center";
//     document.querySelector(".header__hero-image").style.backgroundSize =
//       "contain";
//   }
// }

// setInterval(changeBackground, 10000);

let content = document.querySelector(".anim--heading h3");
let animHead = document.querySelector(".anim--heading");
let i = 1;
function change() {
  let a = ["HTML5", "CSS3", "Javascript", "Node.js", "MongoDb"];
  let width = ["13.5rem", "9.5rem", "19rem", "14rem", "16.3rem"];
  content.innerHTML = a[i];
  animHead.style.width = width[i];
  i++;
  if (i >= 5) {
    i = 0;
  }
}

setInterval(change, 4000);
