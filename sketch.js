var playground
var green
var blue
var pink
var red
var arrow
var bow
var greenballoongroup
var redballoongroup
var blueballoongroup
var pinkballoongroup
var arrowgroup
var arrows
var score = 0
function preload(){
playground = loadImage("background0.png") 
green = loadImage("green_balloon0.png")
blue = loadImage("blue_balloon0.png")
pink = loadImage("pink_balloon0.png")  
red = loadImage("red_balloon0.png")
arrow = loadImage("arrow0.png")
bow = loadImage("bow0.png")
}

function setup() {
  createCanvas(600, 600);
bows = createSprite(580,300,30,30)  
bows.addImage("bow",bow)
greenballoongroup = createGroup()
redballoongroup = createGroup()
blueballoongroup = createGroup()
pinkballoongroup = createGroup()
arrowgroup = createGroup()
  
}

function draw() {
background(playground)
text ("Score:"+score,540,25)
populateblueballoons()
populategreenballoons()
populatepinkballoons()
bows.y = mouseY

drawSprites()  
if(keyDown("space")){
populatearrows()
}
if(arrowgroup.isTouching(redballoongroup))
{
redballoongroup.destroyEach()
arrowgroup.destroyEach()
score = score+1}
if(arrowgroup.isTouching(blueballoongroup))
{
blueballoongroup.destroyEach()
arrowgroup.destroyEach()
score = score+1
}
if(arrowgroup.isTouching(greenballoongroup))
{
greenballoongroup.destroyEach()
arrowgroup.destroyEach()
score = score+1
}
if(arrowgroup.isTouching(pinkballoongroup))
{
pinkballoongroup.destroyEach()
arrowgroup.destroyEach()
score = score+1
}
//arrows.y=bows.y
}
function populateredballoons() {

if (frameCount%60==0){
redballoon=createSprite(20,random(10,380),20,20)
redballoon.addImage("red",red)
redballoon.scale= 0.1
redballoon.velocityY = -4
redballoongroup.add(redballoon)
}
}
function populateblueballoons() {

if (frameCount%60==0){
blueballoon=createSprite(100,random(10,380),20,20)
blueballoon.addImage("blue",blue)
blueballoon.scale= 0.1
blueballoon.velocityY = -4
blueballoongroup.add(blueballoon)
}
}
function populategreenballoons() {

if (frameCount%60==0){
greenballoon=createSprite(190,random(10,380),20,20)
greenballoon.addImage("green",green)
greenballoon.scale= 0.1
greenballoon.velocityY = -4
greenballoongroup.add(greenballoon)
}
}
function populatepinkballoons() {

if (frameCount%60==0){
pinkballoon=createSprite(280,random(10,380),20,20)
pinkballoon.addImage("pink",pink)
pinkballoon.scale= 1.3
pinkballoon.velocityY = -4
pinkballoongroup.add(pinkballoon)
}
}
function populatearrows(){
arrows=createSprite(580,bows.y,20,20)
arrows.addImage("arrow",arrow)
arrows.velocityX = -4
arrows.scale = 0.5
arrowgroup.add(arrows)
}
