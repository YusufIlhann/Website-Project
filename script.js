let redTour = document.getElementById("redTour");
let greenTour = document.getElementById("greenTour");

function bigImg(x) {
  x.style.fontSize = "22px";
}

function normalImg(x) {
  x.style.fontSize = "12px";
}

redTour.addEventListener("mouseover", function () {
  redTour.src = "./picture/horseriding.jpeg";
});
redTour.addEventListener("mouseout", function () {
  redTour.src = "./picture/red tour.jpeg";
});

greenTour.addEventListener("mouseover", function () {
  greenTour.src = "./picture/slayt2.jpeg";
});
greenTour.addEventListener("mouseout", function () {
  greenTour.src = "./picture/uncity.jpeg";
});
const delay = 3000; //ms

const slides = document.querySelector(".slides");
const slidesCount = slides.childElementCount;
const maxLeft = (slidesCount - 1) * 100 * -1;

let current = 0;

function changeSlide(next = true) {
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%";
}

let autoChange = setInterval(changeSlide, delay);
const restart = function () {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};

// Controls
document.querySelector(".next-slide").addEventListener("click", function () {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function () {
  changeSlide(false);
  restart();
});
