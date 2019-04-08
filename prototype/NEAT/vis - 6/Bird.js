function Bird(){

	// parameters controlling the game
	this.y = height / 2;
	this.x = 20;

	this.x1 = [];
	this.y1 = [];

	this.gravity = 5;
	this.lift = -10;
	this.velocity = 0;

	this.icon = birdIcon;

	this.show = function() {

		image(this.icon, this.x, this.y, this.width, this.height);

	}

	// line(x1,y1,x2,y2);

	this.up = function() {

		this.velocity += this.lift;
		this.velocity += this.gravity;
		this.y += this.velocity;
		this.x = this.x + 2;

		if(this.x1.length < 228 ){
			this.x1.push(this.x);
			this.y1.push(this.y);
		}

	}

	this.update = function() {

		// simple gravity velocity relationship with time
		this.velocity += this.gravity;

		// simple relationship between position and velocity
		this.y += this.velocity;

		// x - direction shit
		this.x = this.x + 2;

		if(this.x1.length < 228 ){
			this.x1.push(this.x);
			this.y1.push(this.y);
		}

	}
}