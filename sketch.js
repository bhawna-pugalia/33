var Engine = Matter.Engine
  var World = Matter.World
  var Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var division =[];
var score =0;
var count=0
var gameState ="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 100) {
     division.push(new Division(k, 650, 10, 300));
   }
   


    for (var j = 50; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 65; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 66; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(35)
  fill("white");
  //text(mouseX + "," + mouseY, mouseX, mouseY);
  text("Score : "+score,20,40);
  fill("white");
  
  textSize(25)
  text(" 500 ", 30, 550);
  text(" 500 ", 120, 550);
  text(" 500 ", 220, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 420, 550);
  text(" 100 ", 520, 550);
  text(" 200 ", 620, 550);
  text(" 200 ", 720, 550);
  
  Engine.update(engine);
  ground.display();
  if ( gameState =="end") {
    
    textSize(100);
    text("GameOver", 150, 250);
   
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
 
   if(particle!=null)
   {
      particle.display();
       
       if (particle.body.position.y>700)
       {
             if (particle.body.position.x < 300) 
             {
                 score=score+500;      
                 particle=null;
                 if ( count>= 5)
                  gameState ="end";                          
             }


             else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
             {
                   score = score + 100;
                   particle=null;
                   if ( count>= 5) gameState ="end";

             }
             else if (particle.body.position.x < 800 && particle.body.position.x > 601 )
             {
                   score = score + 200;
                   particle=null;
                   if ( count>= 5)  gameState ="end";

             }      
             
       }
 
     }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }

   

}
function mousePressed()
{
  if(gameState==="start")
  {
    count++;
     particle=new Particle(mouseX, 10, 10); 
    
  }   
}