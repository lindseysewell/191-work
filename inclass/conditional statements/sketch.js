 /* conditional statements and logic */


var bool = true;

function setup() {
  createCanvas(400, 400);
  background (255);
}

function draw() {

  bool = !bool;

  if (true) {
    text("this was true", 40, 40);


  } else {
    text("NOOOOOOOOOO", 40, 40);
  }

}

// ! means not
