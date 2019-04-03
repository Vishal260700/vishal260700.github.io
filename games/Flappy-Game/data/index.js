var bird;
var pipes = [];
var score = 0;

// styling parameters
var birdIcon;

var GameScore = document.getElementById('score');

function preload(){
	birdIcon = loadImage('data/style/bird.png');
}

function setup(){
	
	// Enviornment
	createCanvas(400,500);
	
	// Bird
	bird = new Bird();

	// Pipe
	pipes.push(new Pipe());
};

function draw(){

	// Enviornment
	background(174, 214, 241);

	// pipes
	for (var i = pipes.length - 1; i >= 0 ; i--){
		
		// pipes are showen
		pipes[i].show();

		// pipes array updated
		pipes[i].update();

		// bird hitting pipee and scoring
		if (pipes[i].x == 5){
			score ++;
			GameScore.innerHTML = "Total Score : " + score;
			// console.log(score);
		} else if (pipes[i].hit(bird)){
			GameScore.innerHTML = "Total Score : " + score + " || GAME OVER" + " <br><p>Game Restarts in 5 Seconds ...</p>";
			noLoop();
			// restart the game in 5 sec
			restart();
		}

		// destroying pipes
		if (pipes[i].offscreen()) {
			pipes.splice(i,1);
		}
	}

	// loop function with updated position
	bird.update();

	// to show the bird
	bird.show();

	if (frameCount % 80 == 0){
		pipes.push(new Pipe());
	}
};

function keyPressed(){
	
	// spacebar for game play
	if (key == ' '){
		bird.up();
	}

}

function restart (){
	setTimeout(function () {
        location.reload();
    }, 5000);
}