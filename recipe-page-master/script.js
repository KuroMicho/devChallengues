const imgTarget = document.querySelector(".recipe__img");

const loadImg = function (entries, observer) {
  const [entry] = entries;

  // replace
  entry.target.src = require("./img/photo1.png");

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgObserver.observe(imgTarget);

/////////////////////////////////////////////////////////////////////////////////////
// // another option
// const TIME_SEC = 1.5;
// const imgEl = document.querySelector(".recipe__img");

// setTimeout(() => {
//   imgEl.classList.remove("lazy-img");
//   imgEl.src = require("./img/photo1.png");
// }, TIME_SEC * 1000);
