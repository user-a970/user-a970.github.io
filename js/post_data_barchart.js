var canvas;
var ctx;
var j;
var WIDTH = 320;
var HEIGHT = 165;
var temps = [80, 95, 85, 78, 92, 95, 79];
var graphWIDTH = 250;
var graphHEIGHT = 105;
var lingrad;
var padding = 30;

function drawaxes() {
  ctx.strokeStyle = "black";
  ctx.lineWidth = 2;
  /* y axis */
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, graphHEIGHT + padding);
  ctx.stroke();
  /* x axis */
  ctx.moveTo(padding, graphHEIGHT + padding);
  ctx.lineTo(graphWIDTH + padding, graphHEIGHT + padding);
  ctx.stroke();
}

function clear() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
}

function init() {
  canvas = document.getElementById("canvas-barchart");
  ctx = canvas.getContext("2d");
  lingrad = ctx.createLinearGradient(0, 30, 0, graphHEIGHT + 30);
  lingrad.addColorStop(0, 'red');
  lingrad.addColorStop(0.2, 'yellow');
  lingrad.addColorStop(.5, 'green');
  lingrad.addColorStop(.8, 'blue');
  draw();
}

function rect(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.closePath();
  ctx.fill();
}

function plotdata() {
  ctx.fillStyle = "black";
  j = 0;
  for (var i in temps) {
    rect(((j + 1) * 30) + padding, (graphHEIGHT + padding) - (temps[j]), 10,
      (temps[j]));
    j++;
  }
}

function addlabels() {
  
  ctx.font = "10pt Arial";

  /* y axis labels */
  ctx.fillText("Temps", 2, 15);
  ctx.fillText("100", 5, 40);
  ctx.fillText(" 80", 5, 60);
  ctx.fillText(" 60", 5, 80);
  ctx.fillText(" 40", 5, 100);
  ctx.fillText(" 20", 5, 120);

  /* x axis labels */
  ctx.fillText("Days", 140, 160);
  ctx.fillText("1", 61, 150);
  ctx.fillText("2", 91, 150);
  ctx.fillText("3", 121, 150);
  ctx.fillText("4", 152, 150);
  ctx.fillText("5", 182, 150);
  ctx.fillText("6", 212, 150);
  ctx.fillText("7", 242, 150);

}

function draw() {
  clear();
  ctx.globalAlpha = 1;
  ctx.fillStyle = "white";
  rect(padding, padding, graphWIDTH, graphHEIGHT);
  ctx.globalAlpha = 1;
  ctx.fillStyle = "black";
  drawaxes();
  addlabels();
  plotdata();
}

init();