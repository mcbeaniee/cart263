"use strict";

const rectangle = {
    x1: 20,
    x2: 40,
    y1: 20,
    y2: 40,
    width: 30,
    height: 30,
}
function setup() {
    console.log("go")
}

function draw() {
    createCanvas(400,400);
    background('#000000');
    push();
    fill(255,255,255);
    ectangle.x1,rectangle.y1,rectangle.width,rectangle.height);
    rectangle(rectangle.x2,rectangle.y2,rectangle.width,rectangle.height);
    pop();
}

function mousePressed(){
   rectangle.x1+=1;
   rectangle.y1+=1;
}

function keyPressed(){
    if (key==="32"){
        rectangle.x2+=1;
        rectangle.y2+=1;
    }
}