  var col = 0;
  var d = 10;
  var x = 10;


function setup() {
  createCanvas(600, 400);


}

function draw() {

  background(200, 200, 200);
  col = mouseX;
  fill(col/2);
  ellipse(width/2, height/2, d, d);






  d++;
}


function smiley () {
push();
fill (255, 255, 0);
ellipse (mouseX, mouseY, 100, 100);
fill (0, 0, 0);
ellipse (mouseX-20, mouseY-5, 5, 20);
ellipse (mouseX+20, mouseY-5, 5, 20);
arc(mouseX, mouseY+15, 50, 50, 0, PI, CHORD);
pop();
}
