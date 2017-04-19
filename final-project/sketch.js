var bugs = [];
var num = 300;
var song;

function preload(){
img = loadImage('summernight2.jpg');
song = loadSound('fireflies.mp3');
}

function setup() {
song.play();
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
    // your firefly
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

//make fireflies blink?
//more interactive elements-- maybe a small game, or yellow fireflies scatter when blue comes near,
//or become blue when it touches them
//trail on blue firefly?
//when music plays, bugs dance; when music stops, bugs float?
