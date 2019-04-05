function Bird(){

	// parameters controlling the game
	this.y = width / 2;
	this.x = 25;

	this.gravity = 0.1;
	this.lift = -5;
	this.velocity = 0;

	this.icon = birdIcon;

	this.show = function() {

		console.log(this.icon);

		image(this.icon, this.x, this.y, this.width, this.height);
	}

	this.up = function() {
		this.velocity += this.lift;
	}

	this.update = function() {

		// simple gravity velocity relationship with time
		this.velocity += this.gravity;

		// simple relationship between position and velocity
		this.y += this.velocity;


		// conditions for time when bird hit the top and lower bound of the game screen
		if(this.y > height){
			this.y = height;
			this.velocity = 0;
		}

		if(this.y < 0){
			this.y = 0;
			this.velocity = 0;
		}

	}
}