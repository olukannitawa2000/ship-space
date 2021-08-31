function preload(){
bg=loadImage("images/iss.png"); 
//sleep =loadAnimation("images/sleep.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut.createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
}

function draw() {
  background(255,255,255);  
  imageMode(CENTER);
  image(bg,100,500,500,700);

  
  drawSprites();
}