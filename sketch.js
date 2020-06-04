const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var raindrop = [];


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  for(var i = 0; i < 200; i ++){
    raindrop[i]=new Raindrop(random(0,800),random(0,300),random(10,20),random(10,20));
  }
}

function draw() {
  background("darkblue");
  Engine.update(engine);
  for(var i = 0; i < 200; i ++){
    raindrop[i].display();
    raindrop[i].reset();
  }
  //raindrop.display();
}
