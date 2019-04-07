let bird;

var birdIcon;

let width = 600;
let height = 400;

let lift = -10;
let gravity = 5;
let speed = 2.5;

let x = 25;
let y = height / 2;

function visualize(){

	x = x + speed;
	y = y + gravity;
	y = y + lift;

}

function visualize2(){

	x = x + speed;
	y = y + gravity;

}

function preload(){
	birdIcon = loadImage('bird.png');
}                         

function setup(){
	createCanvas(width, height);

	bird = new Bird();

	for(var i = 0; i < 10; i++){
		console.log("here");
		visualize();
	}

}

function draw(){
	
	// All Drawings

	background(174, 214, 241);

	fill(39, 174, 96);
	noStroke();

	// rect(this.x, 0, this.w, this.top);
	// rect(this.x, height - this.bottom, this.w, this.bottom);

	rect(150, 0, 40, 100);
	rect(150, height - 200, 40, 300);

	rect(300, 0, 40, 200);
	rect(300, height - 100, 40, 300);

	rect(450, 0, 40, 150);
	rect(450, height - 150, 40, 300);

	// flappy Bird

	console.log(x);

	bird.show(x, y);

}