 var value = 255;

 function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(0);

	fill(value);
	noStroke();
	rect(50, 45, 100, 100);

	fill(value);
	noStroke();
	rect(150, 144, 100, 100);

	fill(value);
	noStroke();
	rect(250, 243, 100, 100);
}

function mouseClicked(){
	if(value === 255){
		value = 0;
	}else{
		value = 255;
	}
}