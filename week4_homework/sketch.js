var boids = [];

function setup() {
  createCanvas(800, 800);

  // Add an initial set of boids into the system
  for (var i = 0; i < 100; i++) {
    boids[i] = new Boid(random(width), random(height));
  }
}

function draw() {
  background(51);
  background(150, 0, 240)
  // Run all the boids
  for (var i = 0; i < boids.length; i++) {
    boids[i].run(boids);
  }
}


// Boid class
function Boid(x, y) {
  this.acceleration = createVector(0, 0);
  this.velocity = p5.Vector.random2D();
  this.position = createVector(x, y);
  this.r = 3.0;
  this.maxspeed = 3;   
  this.maxforce = 0.05; 
}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

// Forces go into acceleration
Boid.prototype.applyForce = function(force) {
  this.acceleration.add(force);
}

Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids); // Separation
  var ali = this.align(boids);    // Alignment
  var coh = this.cohesion(boids); // Cohesion
  sep.mult(2.5);
  ali.mult(1.0);
  coh.mult(1.0);
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

//update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
}

Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target, this.position);
  desired.normalize();
  desired.mult(this.maxspeed);
  var steer = p5.Vector.sub(desired, this.velocity);
  steer.limit(this.maxforce);
  return steer;
}

// Draw boid as a circle
Boid.prototype.render = function() {
  fill(127, 127);
  stroke(200);
  ellipse(this.position.x, this.position.y, 16, 16);
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r) this.position.x = width + this.r;
  if (this.position.y < -this.r) this.position.y = height + this.r;
  if (this.position.x > width + this.r) this.position.x = -this.r;
  if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
Boid.prototype.separate = function(boids) {
  var desiredseparation = 25.0;
  var steer = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < desiredseparation)) {
      var diff = p5.Vector.sub(this.position, boids[i].position);
      diff.normalize();
      diff.div(d);
      steer.add(diff);
      count++;
    }
  }

  if (count > 0) {
    steer.div(count);
  }

  if (steer.mag() > 0) {
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
Boid.prototype.align = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum, this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0, 0);
  }
}

// Cohesion
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0, 0); 
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position, boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); 
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum); 
  } else {
    return createVector(0, 0);
  }
}