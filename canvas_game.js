window.onload=game;

function game(){
console.log("New Game Loaded");
var cvs=document.getElementById("cvs");
var ctx=cvs.getContext('2d');
var box_width=50;
var box_height=50;

var speed_horizontal = 5;
var speed_vertical = 5;
var x_pos = 1;
var y_pos = 1;
ctx.fillStyle='red';
ctx.fillRect(x_pos,y_pos,box_width,box_height);
console.log(x_pos,y_pos,box_width,box_height);

function move(){
if(x_pos < 0 || x_pos >550){speed_horizontal = -1*(speed_horizontal)} ;
if(y_pos < 0 || y_pos >350){speed_vertical = -1*(speed_vertical)};   
ctx.clearRect(0,0,600,400);        
ctx.fillStyle='red';
ctx.fillRect(x_pos,y_pos,box_width,box_height);
x_pos+=speed_horizontal;y_pos+=speed_vertical;
// console.log(speed_vertical,speed_horizontal);

requestAnimationFrame(move);
    }

   


    console.log("end of code")

function newfunc(){
    move();
    console.log("this func works")
}
// move();

newfunc();
}