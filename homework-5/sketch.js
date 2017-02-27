var spot = {
  x: 100,
  y: 100
};

var spot2 = {
  x: 100,
  y: 100
};

var x;
var x = 100;
var col = {
  r:0,
  g: 255,
  b: 0
};

var y;
var y = 100;
var col = {
  r:0,
  g: 255,
  b: 0
};
var col2 = {
  r:255,
  g: 0,
  b: 0
};



function setup() {





  createCanvas(800, 600);
  background(0);


}

function draw() {




  /*fill (255, 255, 255);
  ellipse (width/2, height/2, x*4, x*4);
  fill (0);
  ellipse (width/2, height/2, x*2, x*2);
  fill (255, 255, 255);
  ellipse (width/2, height/2, x, x);
  fill (0);
  ellipse (width/2, height/2, x/2, x/2);
  fill(255, 255, 255);
  ellipse (width/2, height/2, x/4, x/4);
  fill (0);
  ellipse (width/2, height/2, x/8, x/8);
  fill (255, 255, 255);
  ellipse (width/2, height/2, x/16, x/16);
  //dots */
  push();
  translate(0, 100);
  spot2.y = abs(spot2.x, height % 0.1);
  col2.r = random(100, 255);
  col2.g = 0;
  col2.b = random (0, 255);
  fill (255, 255, 255, 100);
  ellipse (spot2.x, spot2.y/2, y - 20, y - 20);
  pop();

  noStroke();
  frameRate(10);
  spot.x = random (0, width);
  spot.y = random (0, height);
  x = random(0, 100);
  col.r = 0;
  col.g = random(100, 255);
  col.b = random (0, 255);
  fill (col.r, col.g, col.b, 100);
  ellipse (spot.x/2, spot.y, x, x);

  y = random(0, 100);



  spot2.x = random (0, width);
  spot2.y = random(0, height);
  col2.r = random(100, 255);
  col2.g = 0;
  col2.b = random (0, 255);
  fill (col2.r, col2.g, col2.b, 100);
  ellipse (spot2.x, spot2.y/2, y, y);

  //end dots






  x++;





}
