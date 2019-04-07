let bird;

var birdIcon;

let width = 600;
let height = 450;

let gravity;

function preload(){
	birdIcon = loadImage('bird.png');
}                         

function setup(){

	createCanvas(width, height);

	bird = new Bird();

	noLoop();

}

function draw(){
	
	// All Drawings

	background(174, 214, 241);

	fill(39, 174, 96);
	noStroke();

	// rect(this.x, 0, this.w, this.top);
	// rect(this.x, height - this.bottom, this.w, this.bottom);

	if(frameCount > 2){

		let p1t = document.getElementById('p1top').value;
		let p2t = document.getElementById('p2top').value;
		let p3t = document.getElementById('p3top').value;
		let p1b = document.getElementById('p1bot').value;
		let p2b = document.getElementById('p2bot').value;
		let p3b = document.getElementById('p3bot').value;

		rect(150, 0, 40, p1t);
		rect(150, height - p1b, 40, 500);

		rect(300, 0, 40, p2t);
		rect(300, height - p2b, 40, 500);

		rect(450, 0, 40, p3t);
		rect(450, height - p3b, 40, 500);

		bird.show();

		if(bird.y > height){
			bird.y = height / 4;
			bird.velocity = 0;
		}

		bird.update();
	}

}

function start(){
	loop();
}