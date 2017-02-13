function setup() {
  createCanvas(500, 500);
}

function draw() {

background(100, 255, 100);

push();
translate(50, -40);
fill(255, 200, 0);
ellipse(100, 250, 50, 40);
pop();

push();
translate(250, -40);
fill(255, 200, 0);
ellipse(100, 250, 50, 40);
pop();

push();
translate(15, -30);
fill(255, 200, 0);
ellipse(100, 250, 30, 20);
pop();

push();
translate(285, -30);
fill(255, 200, 0);
ellipse(100, 250, 30, 20);
pop();
//pigtails

push();
translate(25, -30);
fill(255, 10, 10);
ellipse(100, 250, 10, 20);
pop();

push();
translate(270, -30);
fill(255, 10, 10);
ellipse(100, 250, 10, 20);
pop();
//hairbands

  push();
  translate(0, 20);
  fill(255, 200, 0);
  ellipse(250, 150, 200, 200);
  pop();
  fill (255, 10, 10);
  ellipse (250, 180, 150, 150);
//headband, hair//

push();
translate(50, -40);
fill(255 ,224 ,189);
ellipse(100, 250, 20, 30);
pop();

push();
translate(250, -40);
fill(255 ,224 ,189);
ellipse(100, 250, 20, 30);
pop();

//ears


  push();
  translate(-50, 0);
  fill(0, 255, 255);
  rect(250, 250, 100, 150);
  pop();
  //body//


    fill(255 ,224 ,189);
  ellipse(250, 200, 200, 150);
  //head

  push();
  translate(75, -10);
  fill(255, 180, 170);
  ellipse(200, 200, 20, 10);
  pop();
  //nose//

  push();
  translate(20, -100);
  strokeWeight(5);
  line(200, 260, 220, 270);
  pop();
  //wink

  push();
  fill (255, 255, 255);
  stroke(255, 0, 0);
  strokeWeight(4);
  translate(0, 10);
  arc(250, 200, 80, 80, 0, PI+QUARTER_PI, CHORD);
  pop();
  //mouth//

  push();
  translate(-5, -80);
  fill(0, 0, 0);
  ellipse(300, 250, 10, 20);
  pop();
  //eye//


  push();
  translate(180, 50);
  line(100, 100, 110, 98);
  pop();
  //eyebrow//

  push();
  translate(130, 50);
  line(100, 98, 110, 100);
  pop();
  //eyebrow//




}
