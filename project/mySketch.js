let myMessage = "mermaids"
let xLocation;
let yLocation;
let myFont;

function preload(){
  myFont = loadFont('MercyChristole.ttf')
}

function setup() {
  createCanvas(400, 400);

}
function draw() {
  background(82, 255, 212);
  noStroke();
  fill(255, 161, 242);
  textSize(50)
  textFont(myFont)
  text(myMessage, xLocation, yLocation, 240);
  xLocation = mouseX
  yLocation = mouseY
}
