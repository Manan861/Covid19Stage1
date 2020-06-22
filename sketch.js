var name, boy, girl, boyImg, girlImg;
var gameState=0;
var form;

function preload(){
  boyImg=loadImage("BoySprite.png");
  girlImg=loadImage("GirlSprite.png");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
  form=new Form();
 
}


function draw() {
  background(255);
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
    boy=createSprite(displayWidth/2-300,displayHeight/2,50,50);
    girl=createSprite(displayWidth-400,displayHeight/2,50,50);
    textSize(20);
    fill("black");
    text("Choose your character. ",displayWidth/2-110,displayHeight/2);
    boy.addImage(boyImg);
    girl.addImage(girlImg);
  }  
  drawSprites();
}
