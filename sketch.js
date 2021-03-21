var tom,jerry,garden; 
var tom1,tom4,tomWalk;
var jerry1,jerry4,jerryTease;
var gardenI;

function preload() {
    //load the images here
    tom1 = loadImage("cat1.png")
    tomWalk = loadAnimation("cat2.png","cat3.png")
    tom4 = loadImage("cat4.png")
    jerry1 = loadImage("mouse1.png")
    jerryTease = loadAnimation("mouse2.png","mouse3.png")
    jerry4 = loadImage("mouse4.png")
    gardenI = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite(800,700)
    tom.addImage("cat Image",tom1)
    tom.addAnimation("walking",tomWalk)
    tom.addAnimation("collided",tom4)
    tom.scale = 0.2
    tom.debug = true 
     
    
    jerry = createSprite(200,700)
    jerry.addImage("mouse Image",jerry1)
    jerry.addAnimation("Teasing",jerryTease)
    jerry.addAnimation("collidedMouse",jerry4)
    jerry.scale = 0.1
    jerry.debug = true




}

function draw() {

    background(gardenI);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width + jerry.width)/2){
        tom.velocityX = 0
        tom.changeAnimation("collided")
        jerry.changeAnimation("collidedMouse")
    }

    keyPressed();
    drawSprites();

    
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyCode === LEFT_ARROW){
    //jerry.addAnimation("Teasing",jerryTease)
    jerry.changeAnimation("Teasing")
    jerry.frameDelay = 25

    tom.changeAnimation("walking")
    tom.frameDelay = 15
    tom.velocityX = -1



  }



}



