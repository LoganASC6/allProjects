let y = 1;
let speed =5;
let back = 3;

function setup() {
  createCanvas(600,600);

}

function draw() {
  background(back);
  noStroke();
  ellipse (y, 50, 50, 50)

  if(y > width) {speed = -3;}
  if( y >width) {back = "rgba( 0,255,0,0.25)";}
}

