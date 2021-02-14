var bot,botImg,botImg2,botImg3;
var city,city2,cityImg;
var talk1,talk2,press;
var talk1Img,talk2Img,pressImg;

var house1,houseImg;

var trampole,tramImg,tram,tram1,tram2,tram3;

var r1,r2,r3;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16;
var bImg;

var block;
var watch,watchImg;

var nogun,gun,gunImg,noguni;

var edge;

var wall,wall2,wall3;

var key,keyImg,chest,chestImg;

var talk=1;
var play=2;
var end=3;
var gameState=talk;

var won,wonImg;

function preload(){
  botImg=loadAnimation("stand.gif");
  
  cityImg=loadImage("back.gif");

  botImg2=loadAnimation("r1.png","r2.png");
  botImg3=loadAnimation("rb1.png","rb2.png");

  talk1Img=loadAnimation("text1.png");
  talk2Img=loadAnimation("text2.png");

  pressImg=loadImage("press.png");

  houseImg=loadImage("house1.gif");

  watchImg=loadImage("watchout.png");

  bImg=loadImage("box.gif");

  noguni=loadImage("nogun.png");

  gunImg=loadImage('gun.gif');

  trampole=loadAnimation("tra1.png");

  tramImg=loadAnimation("tra1.png","tra2.png","tra3.png")

  chestImg=loadImage("box.png");

  keyImg=loadImage("key.png");
}

function setup(){
  createCanvas(800,400)

  city=createSprite(200,200);
  city.addImage(cityImg);

  city2=createSprite(600,200);
  city2.addImage(cityImg);

  house1=createSprite(100,300);
  house1.addImage(houseImg);
  house1.scale=0.5;

  bot=createSprite(150,330);
  bot.addAnimation("stand",botImg);
  bot.addAnimation("run",botImg2);
  bot.addAnimation("run2",botImg3);
  bot.setCollider("rectangle",0,-5,50,70);

  talk1=createSprite(150,270);
  talk1.addAnimation("t1",talk1Img);
  talk1.scale=3;

  talk2=createSprite(430,280);
  talk2.addAnimation("t2",talk2Img);
  talk2.scale=3;

  press=createSprite(300,350);
  press.addImage(pressImg);
  press.scale=2;

  r1=createSprite(150,410,600,100);
  r2=createSprite(550,410,200,100);
  r3=createSprite(725,410,150,100);

  block=createSprite(10000,10000);

  watch=createSprite(570,300);
  watch.addImage(watchImg);
  watch.scale=2;
  watch.visible=false;

  b1=createSprite(200000,270);
  b1.addImage(bImg);
  b1.scale=0.3;

  b2=createSprite(200000,270);
  b2.addImage(bImg);
  b2.scale=0.3;

  gun=createSprite(100000,20000000);
  gun.addImage(gunImg)
  gun.scale=0.1;

  nogun=createSprite(600,200);
  nogun.addImage(noguni);
  nogun.visible=false;
  nogun.scale=2;

  b3=createSprite(200000,270);
  b3.addImage(bImg);
  b3.scale=0.3;

  b4=createSprite(200000,270);
  b4.addImage(bImg);
  b4.scale=0.3;

  b5=createSprite(200000,270);
  b5.addImage(bImg);
  b5.scale=0.3;

  b6=createSprite(200000,270);
  b6.addImage(bImg);
  b6.scale=0.1;

  b7=createSprite(200000,270);
  b7.addImage(bImg);
  b7.scale=0.1;

  b8=createSprite(200000,270);
  b8.addImage(bImg);
  b8.scale=0.1;

  b9=createSprite(200000,270);
  b9.addImage(bImg);
  b9.scale=0.1;

  b10=createSprite(200000,270);
  b10.addImage(bImg);
  b10.scale=0.1;

  b11=createSprite(200000,270);
  b11.addImage(bImg);
  b11.scale=0.1;

  b12=createSprite(200000,270);
  b12.addImage(bImg);
  b12.scale=0.1;

  b13=createSprite(200000,270);
  b13.addImage(bImg);
  b13.scale=0.1;

  b14=createSprite(200000,270);
  b14.addImage(bImg);
  b14.scale=0.1;

  b3.velocityY=5;
 // b4.velocityY=random(0,8);
 // b5.velocityY=random(0,8);
  //b6.velocityY=random(0,8);
 // b7.velocityY=random(0,8);
  b8.velocityY=random(0,8);
  b9.velocityY=random(0,8);
  b10.velocityY=random(0,8);
  b11.velocityY=random(0,8);
  b12.velocityY=random(0,8);
  b13.velocityY=random(0,8);
  b14.velocityY=random(0,8);


  b15=createSprite(247872389856,390);
  b15.addImage(bImg);
  b15.scale=0.2;
  b15.velocityX=5;

  b16=createSprite(247872389856,390);
  b16.addImage(bImg);
  b16.scale=0.2;
  b16.velocityX=5;
  b16.visible=false;

  wall1=createSprite(6532574387,43827,250,200);
  wall1.visible=false;

  wall2=createSprite(6532574387,43827,250,150);
  wall2.visible=false;
 

  tram=createSprite(4686386,64654897);
  tram.addAnimation("first",trampole);
  tram.addAnimation("second",tramImg);
  tram.scale=0.5;

  tram2=createSprite(4686386,64654897);
  tram2.addAnimation("first",trampole);
  tram2.addAnimation("second",tramImg);
  tram2.scale=0.5;
  
  tram3=createSprite(4686386,64654897);
  tram3.addAnimation("first",trampole);
  tram3.addAnimation("second",tramImg);
  tram3.scale=0.5;
  
  tram1=createSprite(4686386,64654897);
  tram1.addAnimation("first",trampole);
  tram1.addAnimation("second",tramImg);
  tram1.scale=0.5;

  chest=createSprite(5435628,5436587);
  chest.addImage(chestImg);

  wall3=createSprite(6532574387,43827,50,400);

}

function draw(){
  background(0);

  edge =createEdgeSprites();

  bot.velocityY=bot.velocityY+0.8;
  bot.collide(r1);
  bot.collide(r3);
  //bot.collide(r2);
  bot.collide(b1);
  bot.collide(b2);
  bot.collide(b3);
  bot.collide(b4);
  bot.collide(b5);
  bot.collide(b6);
  bot.collide(b7);
  bot.collide(b8);
  bot.collide(b9);
  bot.collide(b10);
  bot.collide(b11);
  bot.collide(b12);
  bot.collide(b13);
  bot.collide(b14);
  bot.collide(b15);
  bot.collide(b16);
  bot.collide(wall1);
  bot.collide(wall3);
  //bot.collide(wall2);


  b15.bounceOff(r1);
  b15.bounceOff(r2);
  b16.bounceOff(edge);
  b3.bounceOff(edge);


  if(gameState===talk && keyDown("e")){
    talk1.destroy();
    talk2.destroy();
    press.destroy();
    gameState=play;
  }

  //if(bot.isTouching(r1)){
  //  bot.velocityY=0;
  //}

 if(gameState===play){
   if(keyWentDown("right")){
     bot.velocityX=6;
     bot.changeAnimation("run",botImg2);
   }
   if(keyWentUp("right")){
     bot.velocityX=0;
     bot.changeAnimation("stand",botImg);
   }
   if(keyWentDown("left")){
     bot.velocityX=-6;
     bot.changeAnimation("run2",botImg3);
   }
   if(keyWentUp("left")){
     bot.velocityX=0;
     bot.changeAnimation("stand",botImg);
   }

  
  console.log(bot.y);
  
   if(bot.y>700){
    reset1();
   }

   if(bot.x>850 && block.x===10000){
     house1.destroy();
     reset1();
     block.x=10001;
     bot.collide(r2);
     watch.destroy();
     b1.x=250;
     b2.x=400;
     b2.y=150;
     gun.x=400;
     gun.y=80;
     
   }

   if(bot.x>850 && block.x===10001){
    b1.x=250325;
    b2.x=400522442;
    b2.y=1505243645;
    gun.x=400325325;
    gun.y=804326763;
    block.x=10002;
    r2.x=720;
    r1.width=70;
    r1.x=35;
    reset1();
    noJump();
    b15.x=200;
    b16.x=100;
    b16.y=250;
    wall1.x=750;
    wall1.y=0;
    wall2.x=730;
    wall2.y=300;
    //b3.x=170;
  //  b3.y=370;
  //  b4.x=210;
  //  b4.y=370;
   // b5.x=90+170-10;
  //  b5.y=370;
   // b6.x=90+160+50-10;
   // b6.y=370;
   // b7.x=90+200+50-10;
   // b7.y=370;
  //  b8.x=90+240+50-10;
   // b8.y=370;
   // b9.x=90+280+50-10;
   // b9.y=370;
   // b10.x=90+310+50;
   // b10.y=370;
   // b11.x=90+360+50-10;
   // b11.y=370;
   // b12.x=90+400+50-10;
    //b12.y=370;
    //b13.x=90+440+50-15;
    //b13.y=370;
   // b14.x=90+470+50-10;
    //b14.y=370;
   }

   if(bot.x>850 && block.x===10002){
     b16.x=8778945;
     b15.x=85489778945;
     r3.x=400;
     block.x=10003
     r3.width=800;
     tram.x=550;
     tram.y=350;
     tram1.x=150;
     tram1.y=350;
     tram2.x=350;
     tram2.y=350;
     tram3.x=550;
     tram3.y=450;
     chest.x=400;
     chest.y=100;
     wall3.x=770;
     wall3.y=200;
     reset1();
   }

   if(bot.x>850 && block.x===10003){
     tram.x=7673878;
     tram1.x=78547685;
     tram2.x=53687;
     tram3.x=6757;
     chest.x=5675789;
     bot.x=5689;
   }

   if(bot.isTouching(tram)){
     bot.velocityY=-20;
     tram.changeAnimation("second",tramImg);
   }
   if(bot.isTouching(tram1)){
    bot.velocityY=-20;
    tram1.changeAnimation("second",tramImg);
  }
  if(bot.isTouching(tram2)){
    bot.velocityY=-20;
    tram2.changeAnimation("second",tramImg);
  }
  if(bot.isTouching(tram3)){
    bot.velocityY=-20;
    tram3.changeAnimation("second",tramImg);
  }
   if(bot.isTouching(gun)){
     nogun.visible=true;
   }
   
   if(bot.isTouching(b16)){
    b16.visible=true;
   }

   if(bot.x<-30){
     reset1();
   }

   if(bot.isTouching(chest)){
     wall3.destroy();
   }

   jump();

   watch.visible=true;
}
  drawSprites();
}

function reset1(){
    bot.x=50;
    bot.y=330;
}

function jump(){
  
  if(keyDown("up")  && bot.y>=330 && bot.y<=335 ) {
    bot.velocityY=-15;
  }

  if(keyDown("space")  && bot.y>=330 && bot.y<=335 ) {
   bot.velocityY=-15;
  }
 
  if(keyDown("space") && bot.y===201.6){
    bot.velocityY=-15;
  }

  if(keyDown("up") && bot.y===201.6){
    bot.velocityY=-15;
  }
 
}

function noJump(){
  
  if(keyDown("up")  && bot.y>=330 && bot.y<=331 ) {
    bot.velocityY=-0;
  }

  if(keyDown("space")  && bot.y>=330 && bot.y<=331 ) {
   bot.velocityY=-0;
  }
 
  if(keyDown("space") && bot.y===201.6){
    bot.velocityY=-0;
  }

  if(keyDown("up") && bot.y===201.6){
    bot.velocityY=-0;
  }
 
  if(keyDown("space") && bot.y===334.4){
    bot.velocityY=-0;
  }

  if(keyDown("up") && bot.y===334.4){
    bot.velocityY=-0;
  }
  if(keyDown("space") && bot.y === 193 ){
    bot.velocityY=-0;
  }

  if(keyDown("up") && bot.y === 193){
    bot.velocityY=-0;
  }
}
