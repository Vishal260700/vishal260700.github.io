function Bird(){

	this.icon = birdIcon;
	this.y;
	this.x;

	this.show = function() {

		image(this.icon, this.x, this.y, this.width, this.height);

	}

}