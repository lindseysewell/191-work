
//Variable
// use 'var'
//declares to computer a new place of reserved memory
//memroy is referenced by namespace "myFirstVar"
//variable outside of function has global scope

  var myFirstVar;
  //assign value to varialbe
  //said ''"myFirstVar" gets 60'


  myFirstVar = 120;
function setup() {
  //var within function is local scope

  createCanvas(800, 400);
  background(200);


}

function draw() {

    translate(400, 200);
    ellipse(0, 0, myFirstVar, myFirstVar);

}
