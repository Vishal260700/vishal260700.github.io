let birdIcon;
let width = 500;
let height = 400;

let x;
let oldx = 0;

function preload(){
	birdIcon = loadImage('bird.png');
}                         

function setup(){

	createCanvas(width, height);

	bird = new Bird();

}

function draw(){
	
	// All Drawings

	background(174, 214, 241);

	fill(39, 174, 96);
	noStroke();

	// rect(this.x, 0, this.w, this.top);
	// rect(this.x, height - this.bottom, this.w, this.bottom);

	rect(120, 0, 40, 150);
	rect(120, height - 150, 40, 300);

	rect(270, 0, 40, 180);
	rect(270, height - 100, 40, 300);

	rect(420, 0, 40, 120);
	rect(420, height - 150, 40, 300);

	// to show the bird
	bird.show();
	
	if (frameCount % 5 == 0){

		x = document.getElementById('visualise').value;
		document.getElementById('stepped').innerHTML = "Step : " + x;


		if (oldx == x) {
			console.log("nothing happens");
		}else{
			bird.x1 = 0;
			oldx = x;
			console.log(x);
			bird.update();
			bird.up();
		}

	}

}
