var index = 0;
var objs = [];
function setup() {
	createCanvas(1000, 1000);
	background(51);

}
function mousePressed(){
	objs[index] = new ball();
	objs[index].x = mouseX;
	objs[index].y = mouseY;
	objs[index].speed.x = 0;
	objs[index].speed.y = 1;
	objs[index].a = 1;
	index++;
}
function draw() {
	background(51);
	for(var i = 0; i < objs.length; i++){
		objs[i].display();
		objs[i].grav();
	}
	// for(var f = 0; f < objs.length; f++){
	// 	for(var n = 1; n < objs.length; n++){
	// 		var d = dist(objs[n].x,objs[n].y, objs[f].x, objs[f].y);
	// 		if (d < objs[n].r+objs[f].r){
	// 			objs[n].speed = 0;
	// 			objs[f].speed = 0;
	// 		}
	//
	// 	}
	// }

}

function ball(){
	this.x = 0;
	this.y = 0;
	this.speed = createVector(0,0)
	this.a = 0;
	this.r = 25
	this.ballStop = canvas.height - this.r
	this.display = function(){
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.grav = function(){
		for(var n = 0; n <= this.a; n++){
			if (this.y <= this.ballStop){
				this.speed.y += n;
				this.x += this.speed.x;
				this.y += this.speed.y;
				console.log(this.y)
			}else{
				n = this.a
			}
		}
	}
}
