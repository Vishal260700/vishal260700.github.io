let model;
let newX, newY;
let x, y;
let StrokePath = null;
let pen = 'down';

function setup(){

	createCanvas(640, 480);
	background(0);

	x = random(-width / 2, width / 2);
	y = random(-height / 2, height / 2);

	model = ml5.SketchRNN('snowflake', modelReady);
}

function modelReady(){

	console.log("Model is successfully loaded!!");

	model.reset();
	model.generate(gotSketch);

}

// s stands for the stroke containing the dx, dy and form(pen) i.e. up, down or end
// pen represnts the stroke type for next step not the current as the original is always down if we think about it for a second...
function gotSketch(error, s){

	if(error){
		console.error(error);
	}else{
		StrokePath = s;
		console.log(StrokePath);
	}
}

function draw(){

	translate(width / 2, height / 2);

	if(StrokePath != null){

		stroke(255);
		strokeWeight(1);

		newX = x + StrokePath.dx * 0.1;
		newY = y + StrokePath.dy * 0.1;

		if(pen == 'down'){
			line(x, y, newX, newY);
		}

		pen = StrokePath.pen;
		StrokePath = null;
		x = newX;
		y = newY;

		if(pen !== 'end'){
			model.generate(gotSketch);
		}else{
			console.log("Drawing is complete");
			model.reset();
			model.generate(gotSketch);
			x = random(-width/2, width/2);
			y = random(-width/2, height/2);
		}
	}
}