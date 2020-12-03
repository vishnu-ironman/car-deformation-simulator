var benz,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
   
  speed = random(55,90);
  weight = random(500,1500);

  benz = createSprite(50, 200, 80, 80);
  benz.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");  
  if(wall.x-benz.x < (benz.width+wall.width)/2 ){
    benz.velocityX  = 0;
    var deformation=0.5 * weight * speed * speed/22509;

    if(deformation > 180){
      benz.shapeColor = color(255,0,0);
      textSize(20);
      fill("red")
      text("deformation:"+deformation,200,200)
      wall.shapeColor = "white";
    }
    if(deformation < 180 && deformation > 100){
      benz.shapeColor = color(230,230,0);
      textSize(20);
      fill("red")
      text("deformation:"+deformation,200,200)
      wall.shapeColor = "white"
    }
    if(deformation<100){
      benz.shapeColor=color(0,255,0);
      textSize(20);
      fill("red")
      text("deformation:"+deformation,200,200)
      wall.shapeColor = "white"
    }
  }
  drawSprites();
}