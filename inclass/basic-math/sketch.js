var result;
var textPos_X;
var textPos_Y;
result  = 100;
var x;

function setup() {
  createCanvas(800, 600);
  textPos_X = width * 0.5;
  textPos_Y = width * 0.5;
  var xPos = x;
  x = 0;


}

function draw() {
  background (100, 255, 100);
  ellipse(x, textPos_Y, 20, 20);

  x++;

  xPos = x % width,



  frameRate(25);


  textSize(36);


  //display math results
  text(result, textPos_X, textPos_Y);

//something is going horribly wrong
}


//modulo (%) resets to zero, so loop
//modulo is remainder?
