const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,rubber,stone,iron,canvas;
var s1,s2,s3,s4,s5,s6,s7,s8,s9,s10;

function preload()
{
	
}

function setup() {
	canvas=createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer= new Hammer(400,350);
	ground= new Ground(400,690,800,40);
	rubber= new Rubber(600,300,40);
	stone= new Stone(300,250,100,100);
	iron= new Iron(450,150);
  s1=new Sand(200,200,12);
  s2=new Sand(200,200,12);
  s3=new Sand(200,200,12);
  s4=new Sand(200,200,12);
  s5=new Sand(200,200,12);
  s6=new Sand(200,200,12);
  s7=new Sand(200,200,12);
  s8=new Sand(200,200,12);
  s9=new Sand(200,200,12);
  s10=new Sand(200,200,12);
  
}

function draw() {
  //rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  hammer.display();
  ground.display();
  rubber.display();
  stone.display();
  iron.display();
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
  //drawSprites();
 
}



