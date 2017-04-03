


function Thing(){



  this.x = random (0, width);
  this.y = random (0, width);
  this.size = random(20, 50);
  this.r = random(100, 255);
  this.g = random (100, 255);
  this.b = random (150, 255);
  this.speed = random (0.5, 3);


this. display = function(){
fill( this.r, this.g, this.b, 45);
noStroke();
ellipse(this.x, this.y, this.size, this.size);

};


this.move = function(){

  this.y = this.y - this.speed;
      if (this.y <= 0 - this.size * 2){
    this.y = height + this.size * 2;


}



};
}
