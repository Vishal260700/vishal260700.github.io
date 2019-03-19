/*
Code By - Vishal Agarwal
Github - https://github.com/Vishal260700
LinkedIn - https://linkedin.com/in/vishal-agarwal-42a6a015a/
*/


var population;
// Each rocket is alive till 400 frames
var lifespan = 500;
// Made to display count on screen
var lifeP;
// Keeps track of frames
var count = 0;
// Where rockets are trying to go
var target;
// Max force applied to rocket
var maxforce = 0.2;

// Dimensions of barrier
var rx = 200;
var ry = 150;
var rw = 400;
var rh = 10;

function setup() {
  createCanvas(800, 600);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50);

}

function draw() {
  background(245, 176, 65);
  population.run();
  // Displays count to window
  lifeP.html(count);

  count++;
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    // Population = new Population();
    count = 0;
  }
  // Renders barrier for rockets
  fill(255);
  rect(rx, ry, rw, rh);
  // Renders target
  ellipse(target.x, target.y, 16, 16);
}
