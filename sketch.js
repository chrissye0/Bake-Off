//C.Espeleta
//101 12/7 P3 Picker Uppers Part II
// (All pixel art in this assignment was made by me.)

let baker;
const ingredients = []; //ingredients instance, array that will contain all the ingredients that will display on the screen
let oven = [] //will contain ingredients needed to win

function preload(){
  baker = new Collector() //baker instance, the collector that will move around the screen
}

function setup() {
  createCanvas(700, 700);
  for (let i = 0; i < 10; i++) { //fill ingredients array with Targets class content
    ingredients[ingredients.length] = new Targets(i);
  }
}

function draw() {
  background("orange");
  //instructions
  noStroke()
  textSize(20)
  textAlign(CENTER)
  text("Use the arrow keys to move around!",width/2,40)
  text("Collect one of each ingredient with the c key \n and drop them in the gray oven with the d key.", width/2,80)
  
  //tables on left, bottom, and right side
  fill("#795548")
  rectMode(CENTER)
  rect(30,height/2,175,height)
  rect(670,height/2,175,height)
  rect(width/2,670,width,220)
  //oven, will be used to bake cake
  fill("rgb(58,58,58)")
  rect(643,50,120,120)
  fill("gray")
  rect(643,50,80,80)

  //display and interact with ingredients
  for(let i = 0; i < 3; i++){
      ingredients[i].display(60,150+i*130) //ingredients on left side
      if(baker.isInside(60,150+i*130)){
      baker.pickup(ingredients[i]) //can pickup if nearby
      }
    baker.carry(ingredients[i],baker.x,baker.y) //carry item
  }
  
  for(let i = 3; i < 6; i++){
      ingredients[i].display(640,i*130-200) //ingredients on right side
      if(baker.isInside(640,i*130-200)){
      baker.pickup(ingredients[i])
      }
    baker.carry(ingredients[i],baker.x,baker.y)
  }
  
    for(let i = 6; i < 10; i++){
      ingredients[i].display(i*120-580,615) //ingredients at the bottom
      if(baker.isInside(i*120-580,615)){
      baker.pickup(ingredients[i]) 
      }
      baker.carry(ingredients[i],baker.x,baker.y)
  }
  
  //display baker
  baker.display()
  //allow baker to move
  baker.move()
  //allow baker to drop materials when pressing d
   baker.drop(baker.x,baker.y)
}