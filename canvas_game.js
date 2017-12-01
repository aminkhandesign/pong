window.onload=game;

function game(){
console.log("New Game Loaded");
var cvs=document.getElementById("cvs");
var ctx=cvs.getContext('2d');
var circle_start=0*Math.PI;var circle_end=2*Math.PI;
var radius = 25;

var speed_horizontal = 5;
var speed_vertical = 5;
var x_pos = 25;
var y_pos = 25;

// ctx.fillRect(x_pos,y_pos,box_width,box_height);
// console.log(x_pos,y_pos,box_width,box_height);

function move(){

// wall collision check     
if(x_pos < 25 || x_pos >675){speed_horizontal = -1*(speed_horizontal)} ;
if(y_pos < 25 || y_pos >475){speed_vertical = -1*(speed_vertical)}; 

// draw the circle
ctx.clearRect(0,0,700,500);        
ctx.fillStyle='red';
ctx.beginPath();
ctx.arc(x_pos,y_pos,radius,circle_start,circle_end);
ctx.fill();

// keep it moving!! 
x_pos+=speed_horizontal;y_pos+=speed_vertical;


requestAnimationFrame(move);
    }

    console.log(circle_start,circle_end)


 move();
}