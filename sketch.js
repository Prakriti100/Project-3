var track;
var path;
var boundary1;
var boundary2;
var boy ,running_boy;

function preload(){
  //pre-load images
  track = loadImage("path.png");

  running_boy = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){

  createCanvas(400,400);

  //create sprites here
  
  path = createSprite(200,200,400,400);
  path.addImage("track",track);
  path.velocityY = 4;
  path.scale = 1.2;

  boundary1 = createSprite(5,200,100,400);
  boundary1.visible = false;

  boundary2 = createSprite(395,200,100,400);
  boundary2.visible = false;

  boy = createSprite(200,300,20,20);
  boy.addAnimation("running",running_boy); 
  boy.scale = 0.1;
}

function draw() {
  background(30);

  if(path.y > 400){
    path.y = height/2;
  }

  boy.x = World.mouseX

  boy.collide(boundary1);
  boy.collide(boundary2);
  
  drawSprites();
}
