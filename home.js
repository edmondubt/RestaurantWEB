let i = 0;
let interval;

let imgArray = [
//   'Img/sliderImg.jpg',
  'Img/BEST.jpg',
  'Img/Img3.jpg',
  'Img/Img4.webp',
  'Img/Img5.jpg',
  'Img/Img6.jpg',


];
console.log(imgArray);

function shfaqImg() {
  document.getElementById('slideshow').src = imgArray[i];
}

function nextImg() {
  i++;
  if (i >= imgArray.length) i = 0;
  shfaqImg();
  resetInterval();
}

function backImg() {
  i--;
  if (i < 0) i = imgArray.length - 1;
  shfaqImg();
  resetInterval();
}

function startSlider() {
  interval = setInterval(() => {
    nextImgAuto();
  }, 2600);
}

function nextImgAuto() {
  i++;
  if (i >= imgArray.length) i = 0;
  shfaqImg();
}

function resetInterval() {
  clearInterval(interval);
  startSlider();
}

window.addEventListener('load', () => {
  shfaqImg();
  startSlider();
});
