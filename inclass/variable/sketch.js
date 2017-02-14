
//Variable
// use 'var'
//declares to computer a new place of reserved memory
//memroy is referenced by namespace "myFirstVar"

  var MyFirstVar;
  //assign value to varialbe
  //said ''"myFirstVar" gets 60'

  myFirstVar = 120;
function setup() {

  createCanvas(800, 400);
  background(200);


  translate(400, 200);
  ellipse(0, 0, myFirstVar, myFirstVar);
}

function draw() {

}
