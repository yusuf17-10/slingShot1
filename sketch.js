
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
var engine,world;
var dustBin1,ground,Ball1;
var dustBin2,dustBin3;
var launcher1;

function setup() {
    // Setup the canvas, the ground the, dustBin, the shooting ball and the bubble balls.
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world=engine.world;
    dustBin1 =  new DustBin(390,330,15,100);
    dustBin2 =  new DustBin(300,330,15,100);
    dustBin3 =  new DustBin(345,375,80,15);
    ground   =  new Ground(200,390,400,20);
    Ball1    =  new Ball(200,400,60,60);

    launcher1= new Launcher(Ball1.body,{x:60,y:100});
}

function draw() {
background(255);
    Matter.Engine.update(engine);
    dustBin1.display();
    dustBin2.display();
    dustBin3.display();
    ground.display();
    Ball1.display();  
    launcher1.display(); 
}
function mouseDragged(){
    Matter.Body.setPosition(Ball1.body,{x:mouseX,y:mouseY});
}


function mouseReleased(){
     launcher1.fly();
}

//function keyPressed() {
  //  if(keyCode===UP_ARROW){
   //     Matter.Body.applyForce(Ball1.body,Ball1.body.position,{x:25,y:-30});
   // }
    
//}