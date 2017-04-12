var bugs = [];
var num = 300;

function preload(){
img = loadImage('summernight2.jpg');

}

function setup() {
bg = img;
    createCanvas(1280, 700);

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

  background(bg);  //bg



    for (var i = 0; i < bugs.length; i++) {
        bugs[i].display();
        bugs[i].move();
        bugs[i].collisionCheck(bugs, i);
    }
    //firefly
    push();
    noStroke();
    fill(0, 200, 255);
    ellipse(mouseX, mouseY, 10, 10);
    fill(0, 250, 250, 50);
    ellipse(mouseX, mouseY, 20, 20);
    pop();
}
function randColor(){
return color( floor(random(200, 255)), floor(random(100, 255)), floor(random(0)) );
}

//https://www.youtube.com/watch?v=XWyezcyfAHU
