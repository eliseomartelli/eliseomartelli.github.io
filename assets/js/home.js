var colors = ["#95FFCA", "#95FFFF"];

var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
window.addEventListener('resize', resizeCanvas, false);
window.addEventListener('scroll', changeToolbar, false);
var toolbar = document.getElementById("toolbar");
toolbar.classList.add("toolbar-transparent");
toolbar.classList.remove("shadow");

function changeToolbar() {

  if (window.pageYOffset >= 20){
    toolbar.classList.add("shadow");
    toolbar.classList.remove("toolbar-transparent");

  } else {
    toolbar.classList.remove("shadow");
    toolbar.classList.add("toolbar-transparent");
  }
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
function init() {
  resizeCanvas();
  window.requestAnimationFrame(draw);
}

var position1 = {
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight
};

var position2 = {
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight
};

var delta1 = {
  x: 3,
  y: 4
}
var delta2 = {
  x: 3,
  y: 2
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height); // clear canvas

  context.globalCompositeOperation = 'color-dodge';

  context.save();
  context.beginPath();
  context.arc(position1.x, position1.y, 192, 0, 2 * Math.PI, false);
  context.fillStyle = colors[0];
  context.fill();

  context.save();
  context.beginPath();
  context.arc(position2.x, position2.y, 192, 0, 2 * Math.PI, false);
  context.fillStyle = colors[1];
  context.fill();

  if (position1.x<0 || position1.x>window.innerWidth) delta1.x = -delta1.x;
  if (position1.y<0 || position1.y>window.innerHeight) delta1.y = -delta1.y;
  position1.x += delta1.x;
  position1.y += delta1.y;

  if (position2.x<0 || position2.x>window.innerWidth) delta2.x = -delta2.x;
  if (position2.y<0 || position2.y>window.innerHeight) delta2.y = -delta2.y;
  position2.x += delta2.x;
  position2.y += delta2.y;

  window.requestAnimationFrame(draw);
}

init();
