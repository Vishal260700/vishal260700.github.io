let birds = [];

let birdIcon;
let width = 500;
let height = 400;

let x = 0;

function preload(){
	birdIcon = loadImage('bird.png');
}                         

function setup(){

	createCanvas(width, height);

	for(var x = 0; x < 5; x++){
		birds[x] = new Bird();
	}

}

function draw(){
	
	// All Drawings

	background(174, 214, 241);

	fill(39, 174, 96);
	noStroke();

	// rect(this.x, 0, this.w, this.top);
	// rect(this.x, height - this.bottom, this.w, this.bottom);

	rect(120, 0, 40, 100);
	rect(120, height - 200, 40, 300);

	rect(270, 0, 40, 180);
	rect(270, height - 100, 40, 300);

	rect(420, 0, 40, 120);
	rect(420, height - 180, 40, 300);

	for(var i = 0; i < birds[0].x1.length; i++){
		line(birds[0].x1[i], birds[0].y1[i], birds[0].x1[i + 1], birds[0].y1[i + 1]);
		stroke(231, 76, 60);
		birds[0].show();
	}

	for(var i = 0; i < birds[1].x1.length; i++){
		if(birds[1].x1[i] < 120 ){
			line(birds[1].x1[i], birds[1].y1[i], birds[1].x1[i + 1], birds[1].y1[i + 1]);
			stroke(160, 64, 0);
			birds[1].show();
		}else{
			birds[1].x = 110;
			birds[1].y = 280;
		}
	}
	
	if (frameCount % 5 == 0){

		if ( (((0 <= x) &&  (x < 5)) || ((8 <= x) && (x < 18)) || ((20 <= x) && (x < 25)) || ((30 <= x) && (x < 36)) ||((41 <= x) && (x < 48)) ||((58 <= x) && (x < 61)) ||((68 <= x) && (x < 70)) || ((78 <= x) && (x < 82)) ||((92 <= x) && (x < 95))||((100 <= x) && (x < 108))||((113 <= x) && (x < 123))||((130 <= x) && (x < 132))||((137 <= x) && (x < 147))||((151 <= x) && (x < 161))||((168 <= x) && (x < 172))||((180 <= x) && (x < 190))||((194 <= x) && (x < 199))||((202 <= x) && (x < 211))||((217 <= x) && (x < 220))||((223 <= x) && (x < 228))) && (x <= 228) ){
			// only for lift
			birds[0].up();
			birds[0].velocity = 0;

			// only for gravity
			birds[1].update();
			birds[1].velocity = 0;

		} else if (x < 228){
			// only for gravity
			birds[0].update();
			birds[0].velocity = 0;

			// only for lift
			birds[1].up();
			birds[1].velocity = 0;
		}

		x++;
		if (x > 228){

			x = 0;
			birds[0].x = 20;
			birds[0].y = height / 2;

			x = 0;
			birds[1].x = 20;
			birds[1].y = height / 2;
		}
	}
}
