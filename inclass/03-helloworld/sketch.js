function setup() {

  createCanvas(500, 500);
  background(0, 255, 150);
}

function draw() {

  stroke (0, 0, 0);
  strokeWeight(2);
  fill (200, 200, 150);
  ellipse(250, 250, 250, 250);

  push();
  translate(30, -20);
  fill (255, 255, 255);
  ellipse(300, 300, 20, 20);
  pop();

  triangle(10, 10, 10, 10, 10, 10);




  // comment? comments are preceded by two forward slashes
  // nice




}
