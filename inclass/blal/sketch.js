function setup() {

}

function draw() {

}

//pythagoreum theorem used for bouncing balls. if the distance of the balls is
//less than my radius plus his radius


bouncingball.prototype.collisioncheck = function(ballArr, myIdx) {
var distance, otherBall;

  for(var i = 0; i < ballArr.length, i++){
    otherBall = ballArr[i];

    if (i != myIdx) {

    distance = dist(this.pos.x, this.pos.y, otherBall.pos.x, otherBall.pos.y);
    maxDist = this.rad,
    }

  }






};
