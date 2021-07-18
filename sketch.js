function setup() {
  createCanvas(800,400);
 object1= createSprite(400, 200, 50, 50);
object1.shapeColor="blue";
object2 = createSprite(200,200,50,50);
object2.shapeColor="blue";
}

function draw() {
  rectMode(CENTER);
  background(50);  

  object2.x=mouseX;
  object2.y=mouseY;

  if(object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.y-object1.y<object1.width/2+object2.width/2 &&
    object1.y-object2.y<object1.width/2+object2.width/2
    ){
  object1.shapeColor="red";
  object2.shapeColor="red";
  }
  else {
    object2.shapeColor="blue";
    object1.shapeColor="blue";
  }

  drawSprites();
}