var r, b, g

function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(0);

	fill(r, g, b, 0);
	noStroke();
	rect(25, 45, 75, 75);
}

function mousePressed(){
	var d = dist(mouseX, mouseY, 25, 45);
	if(d < 100){
		r = (255);
		b = (200);
		g = (150);
	}
}