var sea,sea1;
var ship,ship1;

function preload(){
  seaImg = loadImage("sea.png");
  //uncomment the correct line of code to load images of ship for the animation
 shipImg1=loadAnimation("ship-1.png","ship-2.png");
  //shipImg1=loadAnimation("ship-1","ship-1","ship-2","ship-1");
  //shipImg1=loadanimation("1.png","2.png","3.png","4.png");

}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1,);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
  //uncomment the correct line of code to make the background move towards the left
  //sea.x=-3;
 // sea.velocityY = -3;
 // sea.velocityX= 3;
  sea.velocityX= -3;
  

  
    
  drawSprites();
}
