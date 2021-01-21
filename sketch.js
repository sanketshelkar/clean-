const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var log1;
var bird1;


function setup(){
    var canvas = createCanvas(900,500);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,300,50,60);
    box2 = new Box(700,300,50,60);
    
    //log
    log1 = new log(650,400,150,PI/2)

    //bird
    bird1 = new bird(200,200,30,30)

    ground = new Ground(500,height,1000,20)
}

function draw(){
    background(0);

    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    log1.display();
    bird1.display();

}