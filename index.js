const header = document.querySelector('header');
const main = document.querySelector('main');
const aside = document.querySelector('aside');
const footer = document.querySelector('footer');

function getRandomHexColor() {
  return '#' + parseInt((Math.random() * 0xFFFFFF)).toString(16).padStart(6, '0');
}

header.addEventListener('click', function () {
  this.style.backgroundColor = getRandomHexColor();
});

main.addEventListener('click', function () {
  this.style.backgroundColor = getRandomHexColor();
});

aside.addEventListener('click', function () {
  this.style.backgroundColor = getRandomHexColor();
});

footer.addEventListener('click', function () {
  this.style.backgroundColor = getRandomHexColor();
});