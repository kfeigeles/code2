var earthquakes;

function preload() {
  var url =
   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/' +
    'summary/all_day.geojson';
  earthquakes = loadJSON(url);
}

function setup() {
  createCanvas(800, 800);
  noLoop();
}

function draw() {
  background(255);
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textColor(0);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}

function drawEarthquake(earthquakes) {
  var earthquakeMag = earthquakes.features[0].properties.mag;
  var earthquakeName = earthquakes.features[0].properties.place;
  ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
  textColor(0);
  textAlign(CENTER);
  text(earthquakeName, 0, height - 30, width, 30);
}