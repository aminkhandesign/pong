window.onload=game;

function game(){
console.log("New Game Loaded");

//dom assignment
var cvs=document.getElementById("cvs");
var ctx=cvs.getContext('2d');
var lives_display = document.getElementById("lives");
var circle_start=0*Math.PI;var circle_end=2*Math.PI;
var radius = 25;
var lives = 10;
var speed_horizontal = 5;
var speed_vertical = 5;
var x_pos = 100;
var y_pos = 25;
var paddle_top = 175;
var paddle_bottom = 325;
var velocity_up,velocity_down,velocity_left,velocity_right=0;
var friction=0.75;
var move_amount = 1;
// ctx.fillRect(x_pos,y_pos,box_width,box_height);
// console.log(x_pos,y_pos,box_width,box_height);

//paddles 
var keys = [];
document.addEventListener("keydown",function(ev){
    keys[ev.keyCode]=true;


})

document.addEventListener("keyup",function(ev){
    keys[ev.keyCode]=false;
})

//lives


function game(){

    ctx.clearRect(0,0,700,500);  



//miss check
// if(x_pos<25){
//     if(lives>=0){lives--}
//     else (gameover());

    
// }
lives_display.innerHTML = lives;
// wall collision check    
if((x_pos < 50 && (y_pos<paddle_bottom && y_pos>paddle_top)) || x_pos >675){speed_horizontal = -1*(speed_horizontal)} ;
if(x_pos < 25 && (y_pos>paddle_bottom || y_pos<paddle_top)) {
    speed_horizontal = -1*(speed_horizontal);
    if(lives>0){lives--}
    else if (lives==0){gameover()};
    
}
if(y_pos < 25 || y_pos >475){speed_vertical = -1*(speed_vertical)}; 

function gameover(){

    document.innerHTML="game over";
    
}

//rendering elements

// draw the circle
      
ctx.fillStyle='red';
ctx.beginPath();
ctx.arc(x_pos,y_pos,radius,circle_start,circle_end);
ctx.fill();

// keep it moving!! 
x_pos+=speed_horizontal;y_pos+=speed_vertical;


//draw retangle

if(keys[38])
{
    move_amount *= friction;
}
if(keys[40]){
    move_amount *= -friction;
}
paddle_top+=move_amount;
ctx.fillStyle = 'orangered';
ctx.fillRect(0,paddle_top,30,150);


//control paddle





requestAnimationFrame(game);
    }

 


  game();
}