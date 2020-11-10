var wall, thickness;
var bullet,speed,weight;


 function setup(){
   createCanvas(1400,1400);
   thickness=random(22,83);
   wall.createSprite(1200,200,thickness,height/2);
   speed=random(223,321);
   weight=random(30,52);
 }
function draw(){
  background(0);
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    }
  
  if(damage>10){
    wall.shapeColor=Color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=Color(0,255,0);
  }
  function hasCollided(lbullet,lwall){
    bulletRightEdge=lbullet.x+bullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }
    return false ;
  }
}