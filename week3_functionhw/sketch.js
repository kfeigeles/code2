var circle = [];
var rect = [];
var value = 255;

function setup() {
	createCanvas(800, 800);
	for(var i = 0; i < 100; i ++){
		circle.push(new Dance());
	}
}

function draw() {
	background(0);
	for(var i = 0; i < circle.length/2; i ++){
		circle[i].move();
		circle[i].display();
	}
	fill(value);
	rect(25, 25, 50, 50);
}

function Dance(){
	this.x = random(width);
	this.y = random(height);
	this.diameter = random(5, 50);
	this.speed = 2;

	this.move = function(){
		this.x += random(-this.speed, this.speed);
		this.y += random(-this.speed, this.speed);
	};

	this.display = function(){
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}

function mousePressed(){
	if(value == 255){
		value = 0;
	}else{
		value = 255;
	}
}

