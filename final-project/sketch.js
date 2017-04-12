var bugs = [];
var num = 250;


function setup() {
    createCanvas(windowWidth, windowHeight);

    for (var i = 0; i < num; i++) {
        bugs.push( new Bug(
            random(width),
            random(height),
            random(10),
            randColor()
        ));
    }
}

function draw() {

  background(0);
  //bg


//firefly
push();
noStroke();
fill(0, 200, 255);
ellipse(mouseX, mouseY, 15, 15);
fill(0, 250, 250, 50);
ellipse(mouseX, mouseY, 20, 20);
pop();

    for (var i = 0; i < bugs.length; i++) {
        bugs[i].display();
        bugs[i].move();
        bugs[i].collisionCheck(bugs, i);
    }
}
function randColor(){
return color( floor(random(200, 255)), floor(random(100, 255)), floor(random(0)) );
}
