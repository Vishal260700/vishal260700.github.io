function Bird(){

	// parameters controlling the game
	this.y = height / 2;
    this.x = 64;

	this.gravity = 0.8;
    this.lift = -12;
    this.velocity = 0;

	// Fitness parameters for bird
	this.score = 0; // depend on individual
	this.fitness = 0; // depend on generation

	// if existing brains for generatiojns 2,3 ....
	if(this.brain){
		this.brain = brain.copy();
	}else {
		// Architecture = 4 input, 4 nodes in hidden layer, 2 output i.e. whether to jump or not (we do comparision)
		this.brain = new NeuralNetwork(5, 8, 2);
	}

	this.icon = birdIcon;

	this.show = function() {

		image(this.icon, this.x, this.y, this.width, this.height);
	}

	this.mutate = function() {
		this.brain.mutate(0.1);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.think = function(pipes) {

		let closest = null;
		let closestD = Infinity;
		for (let i = 0; i < pipes.length; i++){
			let d = (pipes[i].x + pipes[i].w) - this.x;
			if (d < closestD && d > 0){
				closest = pipes[i];
				closestD = d;
			}
		}

		let inputs = [];
		inputs[0] = this.y / height;
		inputs[1] = closest.top / height;
		inputs[2] = closest.bottom / height;
		inputs[3] = closest.x / width;
		inputs[4] = this.velocity / 10;


		let output = this.brain.predict(inputs);
		
		if (output[0] > output[1] && this.velocity >= 0) {
			this.up();
		}

	}

	this.offscreen = function(){
		return (this.y > height || this.y < 0);
	}

	this.update = function() {

		this.score ++;

		// simple gravity velocity relationship with time
		this.velocity += this.gravity;

		// simple relationship between position and velocity
		this.y += this.velocity;

	}
}