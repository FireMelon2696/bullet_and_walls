var bullet , wall , speed , weight, thickness;

function setup() {
  createCanvas(1000,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22, 83);
  bullet = createSprite(50, 200, 50, 5);
  wall = createSprite(900,200,thickness,300);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  if(wall.x-bullet.x<wall.width/2+bullet.width/2){
    bullet.velocityX=0;
    var damage = 0.5*speed*weight*weight/(thickness*thickness*thickness);
    if(damage>=10){
      wall.shapeColor="red";
    }
    if(damage<10){
      wall.shapeColor="green";
    }
  } 
  drawSprites();
}