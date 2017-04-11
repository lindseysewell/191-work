function BouncingBall(init_x, init_y, size){
  this.pos = { x: init_x, y: init_y};
  this. vel = {x: 0, y: 0};
  this.size = size;
  this.color = color;

}

  BouncingBall.prototype.display = function (){
push();

fill( this.color);
translate(this.pos.x, this.pos.y);
ellipse (0, 0, size, size);

pop();

  };

  BouncingBall.prototype.move = function(){





  };
