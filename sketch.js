function setup() {
  createCanvas(800,400);
 fr = createSprite(400, 200, 50, 50);
 mr = createSprite(200,200,100,50)
 
 ball1 = createSprite(100,100,30,30)
 ball2 = createSprite(300,100,30,30)

 fr.debug = true
 mr.debug = true
}

function draw() {
  background(255,255,255);  
mr.x = mouseX
mr.y = mouseY

if (isTouching(mr,ball2)){
  mr.shapeColor = "red"
    ball2.shapeColor = "red"
}
  else{
    mr.shapeColor = "green"
    ball2.shapeColor = "green"
  }
  drawSprites();
}



