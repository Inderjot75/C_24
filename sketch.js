const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new BOX(700,320,70,70);
    box2 = new BOX(920,320,70,70);
    box3 = new BOX(700,240,70,70);
    box4 = new BOX(920,240,70,70);
    box5 = new BOX(810,160,70,70);
    pig1 = new PIG(800,350);
    pig2 = new PIG(810,220);
    log1 = new LOG(810,260,300,PI/2);
    log2 = new LOG(810,180,300,PI/2);
    log3 = new LOG(760,120,150,PI/7);
    log4 = new LOG(870,120,150,-PI/7);
    bird = new BIRD(100,100);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(255);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
    bird.display();
    ground.display();
}