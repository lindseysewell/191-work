var thing = [];


function setup(){
createCanvas(800, 800);


for (var i = 0; i < 500; i++){
thing[i] = new Thing();
}



}


function draw(){

  for (var i = 0; i < 500; i++) {
 thing[i].display();
 thing[i].move();

}

}
