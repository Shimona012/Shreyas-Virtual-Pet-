/*var dog,sadDog,happyDog;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);
  foodObj= new Food();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);

  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

feed=createButton("Feed the dog");
feed.position(700,95);
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
feed.mousePressed(addFoods);
}

function draw() {
  background(46,139,87);
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on('value',function(data){
    lastFed=data.val();
  });

  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed:"+lastFed%12+"PM",350,30);
  }
  else if(lastFed==0){
    text("Last Feed:12 AM",350,30);
  }
  else{
    text("Last Feed:"+lastFed+"AM",350,30);
  }
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}
// maam the feed dog button is acting like add food button while add food butoon is acting like nothing.. like they are exchnaged and dont work but there is no error in console.
//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
 
  if(foodObj.getFoodStock()<0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  database.red('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}*/
var dog,sadDog,happyDog, database;
var foodS,foodStock;
var fedTime,lastFed;
var feed,addFood;
var foodObj;

function preload(){
sadDog=loadImage("Images/Dog.png");
happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  fedTime=database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });
 
  fill(255,255,254);
  textSize(15);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
   }else if(lastFed==0){
     text("Last Feed : 12 AM",350,30);
   }else{
     text("Last Feed : "+ lastFed + " AM", 350,30);
   }
 
  drawSprites();
  push();
  fill("white");
  text("Woof! woof! Hello..",10,20);
  fill("blue");
  text(" I am Shreya's virtual pet.. ",10,40);
  fill("red");
  text("i am very hungry can you feed me like Shreya? ",10,60);
  fill("pink");
  text("She always feeds me but today she is late so can you feed me?",10,80);
  fill(rgb(136,255,77));
  text("Click the add food button to load more food and feed button to feed me.",10,100);
  fill("brown");
  //fill(rgb(51,8,0));
  //fill(rgb(243,213,146));
  //fill(rgb(183,119,55));
  //fill(rgb( 51,33,20));
  text("Start feeding me already.. I am sooo hungry! Give me more!!",550,130);
  fill("black");
  text("Thank you feeder😉 Woof!Woof!",300,380);
  pop();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


//function to update food stock and last fed time
function feedDog(){
  dog.addImage(happyDog);
  
  if(foodObj.getFoodStock()<= 0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
  
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  })
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
