let myMessage = "press the right and left keys if you like tigers!"
let myFont; 

function preload(){
  myFont = loadFont("Tiger-Regular.otf")
}

function setup() {
  createCanvas(400, 400);
  background(203, 113, 25);
  noStroke();
  fill(0);
  textFont(myFont)
  textSize(20)
  text(myMessage, 30, 50);
}
function draw() { 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    fill("white")
  }  
  if(keyCode === RIGHT_ARROW){
    fill(18, 9, 5)
  }  
  ellipse(random(0,400),random(0,400),300,10)  
}