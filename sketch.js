var  iss,sleep, brush, gym, eat, bath, move;
var astronaut;
var issImg,sleepImg, brushImg, gymImg, eatImg, bathImg, moveImg;
var astronautImg;

function preload(){
issImg= loadImage("iss.png");
sleepImg = loadAnimation("sleep.png");
brushImg = loadAnimation("brush.png");
gymImg = loadAnimation("gym1.png","gym2.png");
eatImg = loadAnimation("eat1.png","eat2.png");
bathImg = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
}

function setup() {
  createCanvas(1600, 800);
   
  astronout = createSprite(300,230);
  astronout.addAnimation("sleeping", sleepImg);
  astronout.scale = 0.1;


  
}

function draw() {
  background(issImg);
  drawSprites()
  textSize(25);
  fill ("orange")
  text("instructions:",800,400)
  textSize(20);
  text("up arrow=brushing",800,425);
  text("down arrow=gymming",800,445)
  text("right arrow = bathing",800,460)
text("m key =astronout moveing",800,475)
text("left arrow= eating",800,490)
edges=createEdgeSprites();
astronout.bounceOff(edges); 


if (keyDown("UP_ARROW")){
astronout.addAnimation("brushing",brushImg);
astronout.changeAnimation("brushing");
astronout.y=350
astronout.velocityX=0;
astronout.velocityY=0;
}

if (keyDown("DOWN_ARROW")){
  astronout.addAnimation("gyming",gymImg)
  astronout.changeAnimation("gyming")
  astronout.y=500;
  astronout.x=500;
  astronout.velocityX=0;
  astronout.velocityY=0;

}

if (keyDown("LEFT_ARROW")){
  astronout.addAnimation("eating",eatImg);
  astronout.changeAnimation("eating")
  astronout.x=550;
astronout.y=550;
  astronout.velocityX=0.5;
  astronout.velocityY=0.5;
}

if(keyDown("RIGHT_ARROW")){
  astronout.addAnimation("bathing",bathImg);
  astronout.changeAnimation("bathing");
  astronout.y=650;
  astronout.x=650;
  astronout.velocityX=0;
  astronout.velocityY=0;
}
if (keyDown("m")){
  astronout.addAnimation("moving",move);
  astronout.changeAnimation("moving");
  astronout.x=300;
  astronout.y=300;
  astronout.velocityX=2;
  astronout.velocityY=2;
}
 
}