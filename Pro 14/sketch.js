var alien1Image, alien2Image, fruit1Image, fruit2Image, fruit3Image, fruit4Image;
var gameState = "PLAY"
var gameOverSound, swooshSound;
var sword, gameOver;

function preload(){
  alien1Image = loadImage("alien1.png");
  alien2Image = loadImage("alien2.png");
  fruit1Image = loadImage("fruit1.png");
  fruit2Image = loadImage("fruit2.png");
  fruit3Image = loadImage("fruit3.png");
  fruit4Image = loadImage("fruit4.png");
  swordImage = loadImage("sword.png");
  gameOverSound = loadSound("gameover.mp3");
  swooshSound = loadSound("knifeSwooshSound.mp3");
  gameOverImage = loadImage("gameover.png");
}

function setup(){
    createCanvas(400, 400);
    alienGroup = new Group();
    sword = createSprite(200, 200, 10, 10)
    sword.addImage(swordImage);
    sword.scale = 0.5;
    gameOver = createSprite(200, 200, 10, 10)
    gameOver.addImage(gameOverImage);
    gameOver.scale = 0.1;
    gameOver.visible = false;
}

function draw(){
    background("lightgreen");
    sword.y = World.mouseY;
    sword.x = World.mouseX;
    var rand = Math.round(random(1,6));
    if(gameState == "PLAY"){
        if(World.frameCount % 50 == 0){
            if(rand == 1){
                fruit1();
            }
            if(rand == 2){
                fruit2();
            }
            if(rand == 3){
                fruit3();
            }
            if(rand == 4){
                fruit4();
            }
            if(rand == 5){
                alien1();
            }
            if(rand == 6){
                alien2();
            }
        }
    }
    if(sword.isTouching(alienGroup)){
        gameState = "END";
    }
    if(gameState == "END"){
        textSize(250);
        gameOver.visible = true;
    }
    if(gameState == "END" && keyDown("space")){
        gameState = "PLAY";
        gameOver.visible = false;
    }
    
    drawSprites();
}
function fruit1(){
    var fruit1 = createSprite(Math.round(random(10, 390)), Math.round(random(10, 390)), 10 , 10);
    fruit1.addImage(fruit1Image);
    fruit1.lifetime = 100;
    fruit1.scale = 0.15;
}
function fruit2(){
    var fruit2 = createSprite(Math.round(random(10, 390)), Math.round(random(10, 390)), 10 , 10);
    fruit2.addImage(fruit2Image);
    fruit2.lifetime = 100;
    fruit2.scale = 0.15;
}
function fruit3(){
    var fruit3 = createSprite(Math.round(random(10, 390)), Math.round(random(10, 390)), 10 , 10);
    fruit3.addImage(fruit3Image);
    fruit3.lifetime = 100;
    fruit3.scale = 0.15;
}
function fruit4(){
    var fruit4 = createSprite(Math.round(random(10, 390)), Math.round(random(10, 390)), 10 , 10);
    fruit4.addImage(fruit4Image);
    fruit4.lifetime = 100;
    fruit4.scale = 0.15;
}
function alien1(){
    var alien1 = createSprite(Math.round(random(1, 200)), Math.round(random(1, 200)), 10 , 10);
    alien1.addImage(alien1Image);
    alien1.lifetime = 100;
    alien1.scale = 1;
    alienGroup.add(alien1);
}
function alien2(){
    var alien2 = createSprite(Math.round(random(1, 200)), Math.round(random(1, 200)), 10 , 10);
    alien2.addImage(alien2Image);
    alien2.lifetime = 100;
    alien2.scale = 1;
    alien2.add(alienGroup);
}
