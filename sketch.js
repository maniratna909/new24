
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var circle, ground, groundIMG, paperIMG, trash,trashIMG;
function preload()
{
	groundIMG= loadImage(".png");
	paperIMG= loadImage("123.png");
	trashIMG=loadImage("trash.png");
}

function setup() {
	createCanvas(1000, 900);
//Bodies= Bodies.circle(200,100,20);
// ground= createSprite(400,400,800,15);
//ground.shapeColor= "red";
//ground.addImage(groundIMG);
circle= createSprite(230,440,-40,1);
circle.addImage(paperIMG);

trash= createSprite(840,290,4,3);
trash.addImage(trashIMG);
engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white")
 
  keypressed();
  drawSprites();
 
}

function keypressed(){
	if(keyCode === UP_ARROW){
 Matter.body.applyForce(cirlce.body, paperIMG.body.position,{x:5, y:-5});
	}


}