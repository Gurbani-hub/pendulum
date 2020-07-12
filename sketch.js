
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof;
var rope;
var string;


function setup() {
	createCanvas(1200, 1000);
	

	engine = Engine.create();
  world = engine.world;
  roof= Bodies.rectangle(600,100,500,20)
	 bob1= new Bob(450,500,30)
   bob2= new Bob(510,500,30)
   bob3= new Bob(570,500,30)
   bob4= new Bob(630,500,30)
   bob5= new Bob(690,500,30)
	//Create the Bodies Here.
  
  string=Matter.Constraint.create({bodyA:bob1.body,bodyB:roof,pointB:{x:450,y:110}})
Matter.World.add(world,string)
string=Matter.Constraint.create({bodyA:bob2.body,bodyB:roof,pointB:{x:510,y:110}})
Matter.World.add(world,string)
string=Matter.Constraint.create({bodyA:bob3.body,bodyB:roof,pointB:{x:570,y:110}})
Matter.World.add(world,string)
string=Matter.Constraint.create({bodyA:bob4.body,bodyB:roof,pointB:{x:630,y:110}})
Matter.World.add(world,string)
string=Matter.Constraint.create({bodyA:bob5.body,bodyB:roof,pointB:{x:690,y:110}})
Matter.World.add(world,string)


	Engine.run(engine);
  
}


function draw() {
  
  background("white");
  roof.isStatic=true;

line(roof.position.x-200,roof.position.y,bob1.body.position.x,bob1.body.position.y)
line(roof.position.x-100,roof.position.y,bob2.body.position.x,bob2.body.position.y)
line(roof.position.x,roof.position.y,bob3.body.position.x,bob3.body.position.y)
line(roof.position.x+100,roof.position.y,bob4.body.position.x,bob4.body.position.y)
line(roof.position.x+200,roof.position.y,bob5.body.position.x,bob5.body.position.y)




bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()


  rectMode(CENTER) 
  fill("grey")
  rect(roof.position.x,roof.position.y,500,20)

  


  drawSprites();
 
}

function keyPressed() {
 if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-50})
  }
}


