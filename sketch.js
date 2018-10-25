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
    this.index;
	this.x = 0;
	this.y = 0;
	this.speed = createVector(0,0)
	this.a = 0;
    this.r = 0
    this.nextY;
	this.display = function(){
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}
	this.grav = function(){
        this.ballStop = int(canvas.height - this.r)
        if(this.y + this.speed.y < this.ballStop){
            this.y += this.speed.y;
            this.speed.y += this.a;
            this.a += this.a
        }else if(this.y + this.speed.y >= this.ballStop){
            this.speed.y = 0
            this.y = this.ballStop
        }
        if(this.x < this.r){
            this.x = this.r
        }else if(this.x > canvas.width - this.r){
            this.x = canvas.width - this.r
        }
    }
    // this.colide = function(){
    //     var n = index+1
    //     this.distance = dist(this.y, this.x, objs[n].y,objs[n].x)
    //     if (this.distance < this.r + objs[n].r){
    //         this.speed.x = 0
    //         this.speed.y = 0
    //         objs[n].speed.x = 0
    //         objs[n].speed.y = 0
            
        
    //     console.log(this.distance)
    //     }

    // }
}
