let myQuestion = "if you were a color what color would you be?"
 
let contents = "";

let button
let textBox; 
let input2; 

let topcolor,bottomcolor;

let myFont;

function preload(){
  myFont = loadFont("Ferdinand.ttf")
}

function setup() {
  createCanvas(500, 400);
  topcolor = color(255,175,189);
  bottomcolor = color(255,195,160);

  for(let y=0; y<height; y++){
    n=map(y,0,height,0,1);

    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);
    line(0,y,width, y);
  }

  button = createButton("show");
  button.position(185, 245)
  button.mousePressed(showText)
  
  textBox = createInput("type here!")
  textBox.size(250,30)
  textBox.position(90,200)
  textBox.input(storeText)
}
function draw () {



 fill(255);
 textSize(18);
 textFont(myFont)
 text(myQuestion,50,50)
  
}

function showText(){ 
   text(contents,50,200)
   textBox.hide(); 
   
}

function storeText(){
  contents = this.value(); 
}