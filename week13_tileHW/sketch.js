// make an empty array to hold our tiles
var tiles = [];
var tileSize = 400;

var xspacing = 16;
var w; 
var theta = 0.0; 
var amplitude = 75.0;
var period = 500.0;  
var dx; 
var yvalues; 

function preload() {
  // let table = loadTable('https://dl.dropboxusercontent.com/s/cgrl2ekchqrf9hp/Untitled%20form.csv?dl=1&raw=1', 'csv', 'header');
  var table = loadTable('https://dl.dropboxusercontent.com/s/mrq421mkmg31wng/survey.csv?dl=1&raw=1', 'csv', 'header');
  Tile.prototype.table = table;
}

function setup() {
  tiles.push(new KFTile(0, 0, tileSize));

  createCanvas(tileSize * 1, tileSize * 1);

  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));

  noLoop();
}

function draw(){
  background(255, 252, 181);

  calcWave();
  renderWave();

  fill(123, 237, 231);
  rect(0, 50, 400, 2);
  rect(0, 70, 400, 2);
  rect(0, 90, 400, 2);
  rect(0, 110, 400, 2);
  rect(0, 60, 400, 2);

  fill(247, 180, 219);
  rect(50, 50, 25, 40);
  rect(90, 50, 25, 80);
  rect(130, 50, 25, 120);
  rect(170, 50, 25, 40);
  rect(210, 50, 25, 20);

  textSize(18);
  text('? hype what ?', 25, 30);
  fill(247, 180, 219);

  rect(0, 350, 400, 2);
  rect(0, 331, 400, 2);
  rect(0, 251, 400, 2);
  rect(0, 317, 400, 2);

  fill(112, 135, 249);
  rect(290, 350, 25, -40);
  rect(250, 350, 25, -60);
  rect(210, 350, 25, -200);

  textSize(18);
  text('? star who ?', 300, 380);
  fill(112, 135, 249);
}

function calcWave(){
	theta += 0.02;

	var x = theta;
	for(var i =0; i < yvalues.length; i ++){
		yvalues[i] = sin(x)*amplitude;
		x += dx;
	}
}

function renderWave(){
	noStroke();
	fill(255);
	for(var x = 0; x < yvalues.length; x ++){
		ellipse(x*xspacing, height/2 + yvalues[x], 16, 16);
	}
}
