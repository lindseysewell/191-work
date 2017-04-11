

var bugs = [];
var num = 10;


function setup() {
    createCanvas(800, 600);

    for (var i = 0; i < num; i++) {
        bugs.push( new Bug(
            random(width),
            random(height),
            random(70, 80),
            randColor()
        ));
    }
}

function draw() {

  background(0, 255, 150);
  fill(0);
  textSize(40);
    text("Bumper Bugs!!!", 250, 275);


    for (var i = 0; i < bugs.length; i++) {
        bugs[i].display();
        bugs[i].move();
        bugs[i].collisionCheck(bugs, i);
    }
}
function randColor(){
    return color( floor(random(255, 255)), floor(random(0, 50)), floor(random(0, 200)) );
}
