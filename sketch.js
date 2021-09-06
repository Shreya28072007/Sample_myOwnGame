var bg,bg2,form,system,code,security;
var score=0;
var question2,question3,question4,question5,question6,question7,question8,question9,question10;
var question;
var checkAns;
var bg_image;
var correctAns = 0;
var final_page;
var database;
var contestant;
var contestantCount;


function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  bg_image = loadImage("Quiz_image.jpg");

}

function setup() {
  createCanvas(1200,700);

  system = new System();
  security = new Firstpage();

  checkAns = createSprite(600,580,200,20);
  checkAns.shapeColor = 225;
}

function draw() {
  background(bg_image);
//  clues();
  security.display();
  textSize(20);
  fill("white");

//console.log(correctAns);
  drawSprites();
  text("Check the color of the box to know whether you have answered correctly",300,550);

  fill("green");
  text("Green : correct",300,580);

  fill("red");
  text("Red : incorrect",750,580);
}