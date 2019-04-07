function Bird(){

	this.icon = birdIcon;
	this.y = height / 4;
	this.x = 20;
	this.velocity = 0;
	this.gravity = 0.1;

	this.show = function() {

		image(this.icon, this.x, this.y, this.width, this.height);

	}

	this.update = function() {

		// simple gravity velocity relationship with time
		this.velocity += this.gravity;

		// simple relationship between position and velocity
		this.y += this.velocity;

	}

}