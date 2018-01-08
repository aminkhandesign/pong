window.onload=pong;

function pong(){
console.log("New Game Loaded");

//dom assignment
var cvs=document.getElementById("cvs");
var ctx=cvs.getContext('2d');
var lives_display = document.getElementById("lives");
var score_display = document.getElementById("score");
var circle_start=0*Math.PI;var circle_end=2*Math.PI;
var radius = 25;
var lives = 10;
var speed_horizontal = 5;
var speed_vertical = 5;
var x_pos = 100;
var y_pos = 25;
var collision_height;
var paddle_top = 175;
var paddle_bottom = 325;
var velocity_up,velocity_down,velocity_left,velocity_right=0;
var friction=0.75;
var move_amount = 1;
var points=0;
// ctx.fillRect(x_pos,y_pos,box_width,box_height);
// console.log(x_pos,y_pos,box_width,box_height);

//
//sound 
// var context = new AudioContext()
// var o = context.createOscillator()
// var  g = context.createGain()
// o.connect(g)
// g.connect(context.destination)
// o.start(0)

//paddles
var hitEffect = 30;

var keys = [];
document.addEventListener("keydown",function(ev){
    keys[ev.keyCode]=true;


})

document.addEventListener("keyup",function(ev){
    keys[ev.keyCode]=false;
})




//hit effect generator
var flag = true;

function fade(fadeSpeed){
   if (hitEffect>15 && flag){
                    requestAnimationFrame(()=>{hitEffect-=fadeSpeed;console.log(hitEffect);fade(fadeSpeed)})
                    }
   else if(hitEffect<=15) 
                        {
                            flag = false;hitEffect+=fadeSpeed;console.log(hitEffect);fade(fadeSpeed);
                        }
    else if(!flag && hitEffect<30)
                        {
                            requestAnimationFrame( ()=>{hitEffect+=fadeSpeed;console.log(hitEffect);fade(fadeSpeed)})
                        }
    else if(hitEffect>=30)
                        {
                            flag = true;hitEffect=30;return null
                        }
                       
}
//lives


function game(){

    ctx.clearRect(0,0,700,500);



//miss check
// if(x_pos<25){
//     if(lives>=0){lives--}
//     else (gameover());


// }
lives_display.innerHTML = lives;
score_display.innerHTML = points;
// wall collision check
if((x_pos < 50 && (y_pos<paddle_bottom && y_pos>paddle_top)) || x_pos >675){
speed_horizontal = -speed_horizontal
collision_height=y_pos ;
if(x_pos<675){ fade(1);points++;if(points%5==0){speed_horizontal+=5;speed_vertical+=5}}
}

//the above condition checks for i) touching the LEFT side (x_pos<50) AND  touching the left paddle OR  its touching right hand size(x_pos>675)
//reverses horizontal speed


if(x_pos < 25 && (y_pos>paddle_bottom || y_pos<paddle_top)) {
    speed_horizontal = -speed_horizontal;
    if(lives>0){lives--}
    else if (lives==0){gameover()};
}
//this checks if the ball is  touching left wall and  NOT touching the paddle ,
//reverses horizontal speed, also checks and adjusts lives, invokes gameover() is less than 0

if(y_pos < 25 || y_pos >475){speed_vertical = -speed_vertical};
//changes vertical speed if touching top or bottom walls

function gameover(){
    document.body.innerHTML="game over";
}
//game over function simply replacing contents with 'game over'


//rendering elements

// draw the circle

ctx.fillStyle='red';
ctx.beginPath();
ctx.arc(x_pos,y_pos,radius,circle_start,circle_end);
ctx.fill();

// keep it moving!!
x_pos+=speed_horizontal;y_pos+=speed_vertical;


//draw retangle


if(keys[38] && paddle_top>5)
{
    //check if hitting walls
    move_amount--;
    if(move_amount < -5){move_amount=-5}
    paddle_top+=move_amount;
    paddle_bottom=paddle_top+150;
    console.log("key press detected")
}
else if (keys[38] && paddle_top<15) {
  move_amount=-move_amount;
    paddle_top+=move_amount;
    paddle_bottom=paddle_top+150;
  console.log("woops")
}

if((keys[40]) && paddle_top<345){
    //move_amount *= -friction;
    move_amount++;
    if(move_amount > 5){move_amount=5}
    paddle_top+=move_amount;
    paddle_bottom=paddle_top+150;
    console.log("key UP detected")
}
else if ((keys[40]) && paddle_top>330)
{  move_amount=-move_amount;
  paddle_top+=move_amount;
  paddle_bottom=paddle_top+150;
  console.log("woops")}


  var gradient = ctx.createLinearGradient(30,paddle_top-75,0,paddle_top-75);
  gradient.addColorStop(0, `orangered` );
  gradient.addColorStop(1, `orangered`);
ctx.shadowBlur=30-hitEffect;
ctx.shadowColor = "orangered";
ctx.fillStyle = gradient;
ctx.fillRect(0,paddle_top,30,150);


//control paddle





requestAnimationFrame(game);
    }




  game();

}
