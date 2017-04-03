


function Thing2(){



  this.x = random (0, width);
  this.y = random (0, width);
  this.size = random(10, 40);
  this.r = 0;
  this.g = 0;
  this.b = 0;
  this.speed = random (2, 5);


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
