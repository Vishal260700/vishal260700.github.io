function Bird(){

	// parameters controlling the game
	this.y1 = height / 2;
	this.x1 = 0;

	this.gravity = 5;
	this.lift = -10;

	this.icon = birdIcon;

	this.show = function() {
		image(this.icon, this.x1, this.y1, this.width, this.height);
	}

	this.update = function() {
		this.x1 = parseInt(this.x1) + 2 * parseInt(x);
	}

	this.up = function() {

		if (x == 0) {
			bird.y1 = height / 2;
		}
		if ( (((0 <= x) &&  (x < 5)) || ((8 <= x) && (x < 18)) || ((20 <= x) && (x < 25)) || ((30 <= x) && (x < 36)) ||((41 <= x) && (x < 48)) ||((58 <= x) && (x < 61)) ||((68 <= x) && (x < 70)) || ((78 <= x) && (x < 82)) ||((92 <= x) && (x < 95))||((100 <= x) && (x < 108))||((113 <= x) && (x < 123))||((130 <= x) && (x < 132))||((137 <= x) && (x < 147))||((151 <= x) && (x < 161))||((168 <= x) && (x < 172))||((180 <= x) && (x < 190))||((194 <= x) && (x < 199))||((202 <= x) && (x < 211))||((217 <= x) && (x < 220))||((223 <= x) && (x < 228))) && (x <= 228) ){
			console.log("UP");
			this.y1 = parseInt(this.y1) + this.lift + this.gravity;
		}else{
			if (x == 240){
			bird.y1 = height / 2;
			}else{
				this.y1 = parseInt(this.y1) + this.gravity;	
			}
		}
	}

}