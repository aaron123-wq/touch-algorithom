var fix, moving
 function setup()
 { fix=createSprite(200,200, 50, 30);
   //25+15=40 
   moving=createSprite(100, 100, 30, 50); 
  } function draw()
  { background("white");
   moving.x=World.mouseX
    moving.y=World.mouseY
     moving.debug=true;
      fix.debug=true;
       console.log(fix.x-moving.x)
if(fix.x-moving.x<=(fix.width/2+moving.width/2)&&
moving.x-fix.x<=(fix.width/2+moving.width/2)
&&fix.y-moving.y<=(fix.height/2+moving.height/2)&&
moving.y-fix.y<=(fix.height/2+moving.height/2)){
  fix.shapeColor="green"
  moving.shapeColor="green"
}
else{
fix.shapeColor="red"
  moving.shapeColor="red"
}
drawSprites()
  }