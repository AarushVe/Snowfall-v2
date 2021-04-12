const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundImg;
var snow;
var snowman, snowmanImg;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  snowmanImg = loadImage("snowman.png");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  snowman = createSprite(400, 200);
  snowman.addImage(snowmanImg);
  snowman.scale = 0.5

  snow = new Snow(45, 10, 50);
  console.log(snow);
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
  Engine.update(engine);
  snow.display();

  jump();
}


function jump() {
  if (frameCount%5===0) {
    snowman.x = snowman.x + 3;
  }
}