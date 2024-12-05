
let randomWalker = [];
let maxWalkers;
let colorPalette = ["red","blue","purple","magenta","cyan"]
function setup() {
  createCanvas(400, 400);
  background('black');
  
  maxWalkers = 5;
  
  for (i = 0;i < maxWalkers; i++)
    {
      randomWalker.push(new walker(random(0,width),random(0,height),random(-5,10), colorPalette[i]))
    }
                        
}

function draw() {
  
  for (i = 0; i < maxWalkers;i++)
    {
      randomWalker[i].display();
      randomWalker[i].walkingDirection();
      randomWalker[i].keepInCanvas();
    }
  
 
  
}

function display()
{
  //stroke ('white');
  //strokeWeight(2);
 // line(x1,y1,x2,y2);
 // 
 // x1 = x2;
 // y1 = y2;
}

function walkingDirection()
{
  let nextPos = floor(random(4));
  if (nextPos == 0){   
    x2 = x1 + distance;
}
  else if(nextPos == 1){  
    x2 = x1 - distance;
}
   else if(nextPos == 2){  
     y2 = y1 + distance;
}
   else if(nextPos == 3){  
     y2 = y1 - distance;
}
  
  
}

function keepInCanvas()
{
 
}

