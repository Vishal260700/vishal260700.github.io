// parametrs
var birds = [];
let total = 200; // total number of population
var pipes = [];
var score = 0;
let savedBirds = [];
let countered = 0;
let slider  =document.getElementById("gameSpeed");

// for Chart
let MegaArray = [[]];

let cycles = 100;

// styling parameters
var birdIcon;

var GameScore = document.getElementById('score');

function preload(){
	birdIcon = loadImage('data/style/bird.png');
}

function setup(){
	
	// Enviornment
	createCanvas(400,500);
	
	// Birds are created
	for (let i = 0; i < total; i++){
		birds[i] = new Bird();
	}

};

function draw(){

	for (let a =0; a < slider.value; a++){

		if (countered % 80 == 0){
			pipes.push(new Pipe());
		}
		countered ++;

		// pipes
		for (var i = pipes.length - 1; i >= 0 ; i--){

			// pipes array updated
			pipes[i].update();

			// deleting birds on hitting pipes
			for (let j = birds.length - 1; j >= 0 ; j --){
				if(pipes[i].hit(birds[j])){
					MegaArray[0].push(birds[j]);
					savedBirds.push(birds.splice(j, 1)[0]);
				}
			}

			// destroying pipes
			if (pipes[i].offscreen()) {
				pipes.splice(i,1);
			}
		}

		// deleting bords for hitting celing and floor
		for(let k = birds.length - 1; k >=0; k--){
			if(birds[k].offscreen()){
				MegaArray[0].push(birds[k]);
				savedBirds.push(birds.splice(k, 1)[0]);
			}
		}

		// looping through each bird
		for(let bird of birds){

			// Calling the NEAT Algo part
			bird.think(pipes);

			// loop function with updated position
			bird.update();
		}	

		if (birds.length == 0){
			countered = 0;
			nextGeneration();
			pipes = [];
		}
	}

	// all the drawings

	// Enviornment
	background(174, 214, 241);

	for (let pipe of pipes){

		// pipes are showen
		pipe.show();

	}
	for (let bird of birds){

		// to show the bird
		bird.show();

	}

};

// for normal game

/*
function keyPressed(){
	
	// spacebar for game play
	if (key == ' '){
		bird.up();
	}

}
*/

// for normal game

/*
function restart (){
	setTimeout(function () {
        location.reload();
    }, 5000);
}
*/