function Bird(){

	this.icon = birdIcon;

	this.show = function(left, high) {

		this.y = high;
		this.x = left;

		image(this.icon, this.x, this.y, this.width, this.height);

	}

}