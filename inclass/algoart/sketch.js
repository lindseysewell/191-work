
  //declare environment variables.

  var pt1_x, pt1_y;
  var pt2_x, pt2_y;


  var pt3_x;
  var pt3_y;

  var colr = 0;
  var colg = 10;
  var colb = 255;


function setup() {

  createCanvas(400, 400);
  background(0);

  pt1_x = 0 - width;
  pt1_y = height;

  pt2_x = width;
  pt2_y = height;




  pt3_x = width;
  pt3_y = height;

}

function draw() {

 pt1_x += -10;
 pt1_y += 10;





  fill(colr, colg, 255 - colb);
  colg += random(0, 10);
  colb += random (0, 10);


  colg = colg % 255;

triangle(pt1_x, pt2_x, pt2_x, pt2_y, pt3_x, pt3_y);









}
