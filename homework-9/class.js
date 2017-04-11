function Bug(init_x, init_y, size, color){
    this.pos = { x: init_x, y: init_y };
    this.vel = { x: 1, y: 1 };
    this.size = size;
    this.rad = this.size * 0.5;
    this.color = color;
}

Bug.prototype.display = function () {
    push();

    fill(this.color);

    translate( this.pos.x, this.pos.y );
    push();
    push();
//head
    fill(0);
    ellipse (0, -40 ,this.size * 0.5, this. size * 0.5);
    pop();
    ellipse(0, 0, this.size, this.size + 10);
//dots
    push();
    fill(0);
    ellipse(-20, 20, this.size * 0.25, this.size * 0.25);
    ellipse(20, 10, this.size * 0.25, this.size * 0.25);
    ellipse(-10, -20, this.size * 0.25, this.size * 0.25);
    pop();
    line (0, -40, 0, 40);
    pop();

    pop();
};

Bug.prototype.move = function(){


    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // edge check?
    if (this.pos.x >= width) {
        this.pos.x = width - this.vel.x;
        this.vel.x *= -1;
    } else if (this.pos.x <= 0) {
        this.pos.x = 1 + this.vel.x;
        this.vel.x *= -1;
    }

    if (this.pos.y >= height) {
        this.pos.y = height - this.vel.y;
        this.vel.y *= -1;
    } else if (this.pos.y <= 0) {
        this.pos.y = 1 + this.vel.y;
        this.vel.y *= -1;
    }
};


Bug.prototype.collisionCheck = function(bugArr, myIdx){
    var maxDist, distance, otherBug;


    for (var i = 0; i < bugArr.length; i++) {

        var collision = false;

        otherBug = bugArr[i];

        if (i !== myIdx) {
            distance = dist(this.pos.x, this.pos.y, otherBug.pos.x, otherBug.pos.y);
            maxDist = this.rad + otherBug.rad;

            if (distance <= maxDist) {
                collision = true;
            }

            if (collision) {
                this.vel.x *= -1;
                this.vel.y *= -1;
            }

        }

    }
};
