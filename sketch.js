

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1,box2,box3,box4,box5;
var ground;
var pig1,pig2;
var stick,stick1,stick2,stick3;
function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(700,320,70,70);
  box3 = new Box(700,240,70,70);
  box2 = new Box(900,320,70,70);
  box4 = new Box(900,240,70,70);
  box5 = new Box(800,160,70,70);
  ground = new Ground(600,380,1200,20);
  pig1 = new Pig(800,350);
  pig2 = new Pig(800,240);
  stick = new Log(800,270,280,PI/2);
  stick1 = new Log(810,190,280,PI/2);
  stick2 = new Log(730,150,130,PI/3);
  stick3 = new Log(870,150,130,PI/3*2);
}

function draw() {
  background(0);  

  Engine.update(engine);

  box1.display();
  box3.display();
  box2.display();
  box4.display();
  box5.display();
  ground.display();
  pig1.display();
  pig2.display(); 
  stick.display();
  stick1.display();
  stick2.display();
  stick3.display();
}