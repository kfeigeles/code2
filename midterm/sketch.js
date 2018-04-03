//control keys
//up, down, left, right arrows

//s = snake
var s;
//scl = scale
var scl = 20;
//snack = pink box (food)
var snack;
//array of "dancing" circles
var dance = [];

function setup(){
  createCanvas(700, 700);
  s = new Snake();
  pickLocation();

  for(var i = 0; i < 40; i ++){
    dance.push(new Shake());
  }
}

//create snake and add blocks to snake
function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 0;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }

  this.end = function(){
    for (var i = 0; i < this.tail.length; i++){
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }

  this.update = function(){
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1){
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
  }

  this.show = function(){
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  }
}

//random location for snack element
function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  snack = createVector(floor(random(cols)), floor(random(rows)));
  snack.mult(scl);
}

function draw(){
  background(51);

  //if snake eats the snack another white block gets added to the snake
  if (s.eat(snack)){
    pickLocation();
  }
  s.end();
  s.update();
  s.show();

  //draw snack 
  fill(255, 0, 100);
  rect(snack.x, snack.y, scl, scl);

  //draw the circles
  for(var i = 0; i < dance.length; i ++){
    dance[i].move();
    dance[i].display();
  }
}

//function for circle movement
function Shake(){
  this.x1 = random(width);
  this.y1 = random(height);
  this.diameter = random(10, 30);
  this.speed = 1;

  this.move = function(){
    this.x1 += random(-this.speed, this.speed);
    this.y1 += random(-this.speed, this.speed);
  };

  this.display = function(){
    ellipse(this.x1, this.y1, this.diameter, this.diameter);
  }
}

//what keyes control the snake
function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW){
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}
