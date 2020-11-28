var rect1,rect2 

function setup() {
  createCanvas(800,400);
  rect1 =  createSprite(400, 200, 50, 50);
  rect2 = createSprite(200,200,50,50);
  rect1.shapeColor="green";
  rect2.shapeColor="green";
  rect1.debug=true;
  rect2.debug=true;
  rect1.velocityX=2
  rect1.velocityY=3
  rect2.velocityX=-3
  rect2.velocityY=-4
  Edges = createEdgeSprites();
}

function draw() {
  background(255,255,255); 
  rect1.bounceOff(Edges);
  rect2.bounceOff(Edges);
  bounceOff(rect1,rect2);
  if(isTouching(rect1,rect2)){

      rect1.shapeColor="red";
  rect2.shapeColor="red";
    }else{
      rect1.shapeColor="green";
  rect2.shapeColor="green";
    }
  drawSprites();
  }
 