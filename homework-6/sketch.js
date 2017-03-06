




var x = 100;

var h = height;
var w = width;

var f = false;





function setup() {





  createCanvas(800, 600);
  background(0);


}

function draw() {

 if (f) {

   frameRate (40);


  fill (255, 255, 255);
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
  x++;
  } else {




    background(0, 0, 0);
      }


      fill (255, 0, 0);
      ellipse (400, 300, 100, 100);

    }

    function mousePressed() {
      if (dist(mouseX, mouseY, 400, 300) < 50); {
        f = !f;
    }





}
