function Bird(){

	// parameters controlling the game
	this.y = height / 2;
	this.x = 20;

	this.gravity = 5;
	this.lift = -10;
	this.velocity = 0;

	this.icon = birdIcon;

	this.show = function() {

		image(this.icon, this.x, this.y, this.width, this.height);
	}

	this.up = function() {
		this.velocity += this.lift;
		this.velocity += this.gravity;
		this.y += this.velocity;
		this.x = this.x + 2;
	}

	this.update = function() {

		// simple gravity velocity relationship with time
		this.velocity += this.gravity;

		// simple relationship between position and velocity
		this.y += this.velocity;

		// x - direction shit
		this.x = this.x + 2;
	}
}