var rButtonValue = 0;
var lButtonValue = 0;

function setup() {
  createCanvas(900, 600);
}

function draw() {
  background(230);
  
  // COUNTER BOX
  line(width/2, 0, width/2, height);
  
  // NUMBER DISPLAY
  textSize(64);
  text(lButtonValue.toString(), width/4, height/2);
  text(rButtonValue.toString(), 3*width/4, height/2);
}

function mouseClicked() {
  if (mouseX <= width/2) {
    lButtonValue ++;
  }
  else if (mouseX > width/2){
    rButtonValue += 2;
  }
}
