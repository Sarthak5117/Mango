
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var treeObj, stoneobj,groundobject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;

function preload(){
boy=loadimage("image/boy.png");

	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	stoneobj=new stoneobj(235,420,30)

	mango1=new mango(1100,100,30)
	mango2=new mango(1170,130,30)
	mango3=new mango(1010,140,30)
	mango4=new mango(1000,70,30)
	mango5=new mango(1100,230,30)
    mango6=new mango(1000,230,40)
	mango7=new mango(11,150,40)
	mango8=new mango()



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



