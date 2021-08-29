var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var astronaut;
var space;
var text;
var Instructions=5

function preload(){
bg= loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym11.png", "gym12.png");
eat = loadAnimation("eat1.png", "eat2.png");
drink = loadAnimation("drink1.png", "drink2.png");
move = loadAnimation("move.png", "move1.png");
}


function setup() {
  createCanvas(800,400);

  space = createSprite(400,200);
  space.addImage(bg);
  space.scale= 0.15;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1

  
}

function draw() {
  background(255,255,255); 
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing")
    astronaut.y = 280;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking");
    astronaut.y = 300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Excersise", gym);
    astronaut.changeAnimation("Excersise");
    astronaut.y = 275;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 100;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }






  drawSprites();
  textSize(25);
  text("Instructions:" + Instructions, 100,50);
}