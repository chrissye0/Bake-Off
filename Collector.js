//C.Espeleta
//101 12/7 P3 Picker Uppers Part II

//Collector class - contains character sprites, displays and updates character sprites, and moves character sprite around screen using arrow key interaction.
//Part II - Added isInside (check to see if baker is near item), pickup (pick up item), carry (carry picked up item), and drop (drop item) functions.

class Collector {
  constructor(x = 350, y= 300){
    //setting initial values
    this.x = x
    this.y = y
    this.state = 0
    this.speed = 4
    this.oven = [] //ingredients in oven
    this.item = null //item held
    
    //create array to contain all character sprites
    this.sprites = []
    this.sprites[0] = loadImage("media/PixelBaker-1.png") //0 - down facing
    this.sprites[1] = loadImage("media/PixelBaker-2.png") //1 - down walking
    this.sprites[2] = loadImage("media/PixelBaker-3.png") //2 - up facing
    this.sprites[3] = loadImage("media/PixelBaker-4.png") //3 - up walking
    this.sprites[4] = loadImage("media/PixelBaker-5.png") //4 - right facing
    this.sprites[5] = loadImage("media/PixelBaker-6.png") //5 - right walking
    this.sprites[6] = loadImage("media/PixelBaker-7.png") //6 - left facing
    this.sprites[7] = loadImage("media/PixelBaker-8.png") //7 - left walking   
    this.cake = loadImage("media/cake.png") //cake if you win
  }
  
  display(){
    imageMode(CENTER)
    image(this.sprites[this.state],this.x,this.y)
    text('Ingredients added: '+this.oven.length,width/2,500)
    
    if(this.oven.length === 10){ //checking ingredients in oven
    if(new Set(this.oven).size !== this.oven.length){ //check for duplicates
          text("Try again!",width/2,200) //if duplicates
        } else{
          text("Good job! \n You baked a cake!",width/2,200) //if no duplicates
          image(this.cake, width/2,height/2)
        }
    }
  }
  
  move(){
      if (keyIsDown(DOWN_ARROW)){
      /* When pressing down key
      Use the walking down sprite and add this.speed to this.y */
      this.state = 1
      this.y += this.speed
    } else if(keyIsDown(UP_ARROW)){
      /* When pressing up key
      Use the walking up sprite and subtract this.speed from this.y */
      this.state = 3
      this.y -= this.speed
    } else if(keyIsDown(RIGHT_ARROW)){
      /* When pressing right key
      Use the walking right sprite and add this.speed to this.x */
      this.state = 5
      this.x += this.speed
    } else if(keyIsDown(LEFT_ARROW)){
      /* When pressing left key
      Use the walking left sprite and subtract this.speed from this.x */
      this.state = 7
      this.x -= this.speed
      
      //when not holding down a key
    } else if(this.state === 1){
      this.state = 0 //use facing down sprite
    } else if(this.state === 3){
      this.state = 2 //use facing up sprite
    } else if(this.state === 5){
      this.state = 4 //use facing right sprite
    } else if (this.state === 7){
      this.state = 6 //use facing left sprite
    }
    
    //check for boundaries and stop player from going past tables + screen
    if(this.x > 550){
      this.x = 550
    } else if(this.x < 150){
      this.x = 150
    } else if (this.y > 510){
      this.y = 510
    } else if(this.y < 50){
      this.y = 50
    }
  }
  
  isInside(x,y){ //to see if baker is close enough to item
    return dist(x,y,this.x,this.y) < 110
    }
  
  pickup(item){
    if(key === "c"){
        if(this.item == null){ //collect if not holding item
          this.item = item
          //console.log(this.item)
        }
      }
  }
  
  carry(item,x,y){
    if(this.item !== null){ //if carrying, display item
      this.item.carried(this,x,y)
      }
  }
  
  drop(x,y){
    if(key === "d"){
      if(x > 515 && y < 100 && this.item !== null){ //dropping in oven
        append(this.oven, this.item)
        //console.log(this.oven)
      }
    this.item = null //dropping anywhere else
    }
  }
}