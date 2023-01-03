//C.Espeleta
//101 12/7 P3 Picker Uppers Part II

//Targets class - contains ingredient sprites and displays ingredient sprites
//Part II - Ingredient sprites are interactive and move with baker once picked up.

class Targets {
  
  constructor(item){
    this.owner = null
    //load all media images and put them into array
    this.item = item
    this.ingredients = []
    this.ingredients[0] = loadImage("media/BakingIngredients-1.png")
    this.ingredients[1] = loadImage("media/BakingIngredients-2.png")
    this.ingredients[2] = loadImage("media/BakingIngredients-3.png")
    this.ingredients[3] = loadImage("media/BakingIngredients-4.png")
    this.ingredients[4] = loadImage("media/BakingIngredients-5.png")
    this.ingredients[5] = loadImage("media/BakingIngredients-6.png")
    this.ingredients[6] = loadImage("media/BakingIngredients-7.png")
    this.ingredients[7] = loadImage("media/BakingIngredients-8.png")
    this.ingredients[8] = loadImage("media/BakingIngredients-9.png")
    this.ingredients[9] = loadImage("media/BakingIngredients-10.png")
  }
  
   display(x,y){
    //display images on screen
    this.x = x
    this.y = y
    imageMode(CENTER)
    image(this.ingredients[this.item], this.x, this.y)
    }

  carried(item,x,y){ //display held item to the side of the baker
    image(this.ingredients[this.item],x-80,y)
  }
    }