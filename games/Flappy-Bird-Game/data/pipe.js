function Pipe() {

	// parameters
	this.top = random(height/2);
	this.bottom = random(height / 2);
	this.x = width;
	this.w = 80;
	this.speed = 2.5;

	// pipe show function
	this.show = function() {
		fill(39, 174, 96);
		noStroke();
		rect(this.x, 0, this.w, this.top);
		rect(this.x, height - this.bottom, this.w, this.bottom);
	}

	// pipe update function to move left
	this.update = function() {
		this.x -= this.speed;
	}

	// offscreen function to remove pipes
	this.offscreen = function() {
		if(this.x < -this.w){
			return true;
		} else {
			return false;
		}
	}

	// pipe hits bird
	this.hit = function(bird) {
		
		// condition defining region we don't want the bird to be
		if(bird.y < this.top || bird.y > height - this.bottom){
			if(bird.x > this.x && bird.x < this.x + this.w){
				return true;
			}
		} return false;
	}
}