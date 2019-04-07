let birdIcon;
let width = 500;
let height = 400;

let x = 0;

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

	rect(120, 0, 40, 100);
	rect(120, height - 200, 40, 300);

	rect(270, 0, 40, 180);
	rect(270, height - 100, 40, 300);

	rect(420, 0, 40, 120);
	rect(420, height - 180, 40, 300);

	// loop function with updated position

	// to show the bird
	bird.show();

	
	if (frameCount % 5 == 0){

		if ( (((0 <= x) &&  (x < 5)) || ((8 <= x) && (x < 18)) || ((20 <= x) && (x < 25)) || ((30 <= x) && (x < 36)) ||((41 <= x) && (x < 48)) ||((58 <= x) && (x < 61)) ||((68 <= x) && (x < 70)) || ((78 <= x) && (x < 82)) ||((92 <= x) && (x < 95))||((100 <= x) && (x < 108))||((113 <= x) && (x < 123))||((130 <= x) && (x < 132))||((137 <= x) && (x < 147))||((151 <= x) && (x < 161))||((168 <= x) && (x < 172))||((180 <= x) && (x < 190))||((194 <= x) && (x < 199))||((202 <= x) && (x < 211))||((217 <= x) && (x < 220))||((223 <= x) && (x < 228))) && (x <= 228) ){
			console.log("Lift");
			// only for lift
			bird.up();
			bird.velocity = 0;
		} else if (x < 228){
			console.log("Down");
			// only for gravity
			bird.update();
			bird.velocity = 0;
		}
		x++;
		if (x > 228){
			x = 0;
			bird.x = 20;
			bird.y = height / 2;
		}
	}

}

// start Visualization
// slider Visualization
// Graph at bottom corresponding x and y values