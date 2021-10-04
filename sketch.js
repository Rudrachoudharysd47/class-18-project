   var car
   var oppositecar
   function prelod(){

   car = loadAnimation("opposite car.jpg", oppositecar);

   }

   function setup() {
   createCanvas(800,400);
   createSprite(400, 200, 50, 50);

   car=createSprite(145,145,50,50)
   car.addImage("opposite car.jpg",oppositecar);
   car.scale=0.5
  
   }

   function draw() {
   background(255,255,255);  
   drawSprites();
   }












   
















