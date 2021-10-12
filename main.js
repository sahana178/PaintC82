var mouseEvent="empty";
var last_X, last_Y;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_line=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
      mouseEvent="mouseDown";

}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
      mouseEvent="mouseLeave";

}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
      mouseEvent="mouseUp";

}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){

    curent_position_X=e.clientX - canvas.offsetLeft;
    curent_position_Y=e.clientY - canvas.offsetTop;
      
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_line;

        console.log("last position of x and y coordinates");
        console.log("X="+last_X+" Y="+last_Y);
        ctx.moveTo(last_X, last_Y);
        console.log("curent position of x and y coordinates");
        console.log("X="+curent_position_X+" Y="+curent_position_Y);

        ctx.lineTo(curent_position_X, curent_position_Y);
        ctx.stroke();

    }
     
      last_X=curent_position_X;
      last_Y=curent_position_Y;

}


