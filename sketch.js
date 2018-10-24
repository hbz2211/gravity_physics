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
		if(this.y + this.speed.y < this.ballStop){
			this.y += this.speed.y
			this.speed.y += a;
		}else if (this.y + this.speed.y >= this.ballStop){
			this.speed.y = 0
			this.y = this.ballStop
		} 
	}
}