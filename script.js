var last_position_of_x, last_position_of_y;
var last_position_of_touch_x, last_position_of_touch_y;
var mouse_event = "empty";
var width = screen.width;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "red";
width_of_line = 1;

new_width = screen.width - 100;
new_height = screen.height - 300;

if(width < 992) {

    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";

}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {

    console.log("my_touchstart");

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;
    last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {

    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;    
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_position_of_touch_x, last_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {

    mouse_event = "mousedown";
    console.log(mouse_event);

    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e) {

    mouse_event = "mouseup";
    console.log(mouse_event);

}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {

    mouse_event = "mouseleave";
    console.log(mouse_event);

}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if(mouse_event == "mousedown"){

    ctx.beginPath();
    ctx.lineWidth = width_of_line;
    ctx.strokeStyle = color;
    ctx.moveTo(last_position_of_x, last_position_of_y);
    ctx.lineTo(current_position_of_x, current_position_of_y);
    ctx.stroke();

    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}

function clearArea() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

}