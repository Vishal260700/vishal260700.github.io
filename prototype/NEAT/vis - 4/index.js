let birds1 = [];
let birds2 = [];
let birds3 = [];
let birds4 = [];

var birdIcon;

let width = 600;
let height = 450;

let lift = -10;
let gravity = 5;
let speed = 2.5;

function preload(){
	birdIcon = loadImage('bird.png');
}                         

function setup(){

	createCanvas(width, height);

	for(var x = 0; x < 25; x++){
		birds1[x] = new Bird();
			if(x < 12){
				birds1[x].x = 5 + (x) * 50;
				birds1[x].y = 30;
			}else{
				birds1[x].x = 5 + (x - 12) * 50;
				birds1[x].y = 80;
			}
	}


	for(var x = 0; x < 25; x++){
		birds2[x] = new Bird();
			if(x < 12){
				birds2[x].x = 5 + (x) * 50;
				birds2[x].y = 130;
			}else{
				birds2[x].x = 5 + (x - 12) * 50;
				birds2[x].y = 180;
			}
	}

	for(var x = 0; x < 25; x++){
		birds3[x] = new Bird();
			if(x < 12){
				birds3[x].x = 5 + (x) * 50;
				birds3[x].y = 230;
			}else{
				birds3[x].x = 5 + (x - 12) * 50;
				birds3[x].y = 280;
			}
	}

	for(var x = 0; x < 25; x++){
		birds4[x] = new Bird();
			if(x < 12){
				birds4[x].x = 5 + (x) * 50;
				birds4[x].y = 330;
			}else{
				birds4[x].x = 5 + (x - 12) * 50;
				birds4[x].y = 380;
			}
	}

	noLoop();

}

function draw(){
	
	// All Drawings

	background(174, 214, 241);

	fill(39, 174, 96);
	noStroke();

	if(frameCount > 2){
		for(var i = 0; i < 25; i++){
			birds1[i].show();
			birds2[i].show();
			birds3[i].show();
			birds4[i].show();
		}
	}
}

function start(){
	loop();
}