"use strict";

    let x1 = 20;
    let x2 = 40;
    let x3 = 20;
    let y1 = 20;
    let y2 = 40;
    let y3 = 20;
    let width = 30;
    let height = 30;
    let color =  {
        r: 255,
        g: 255,
        b: 255
    }
function setup() {
}

function draw() {
    console.log(y3)
    createCanvas(400,400);
    background('#000000');
    moveRectangle();
    push();
    fill(255,255,255);
    rect(x1,y1,width,height);
    fill(100,100,100);
    rect(x2,y2,width,height);
    color.r = mouseX;
    color.g = mouseY;
    color.b = mouseX-mouseY;
    fill(color.r,color.g,color.b);
    rect(x3,y3,width,height);
    pop();
}

function mousePressed(){
   x1+=1;
   y1+=1;
}

function keyPressed(){
    if (keyCode ===32){
        x2+=1;
        y2+=1;
    }
}

function moveRectangle(){
    y3+=1;
    if (y3 > 400){
        y3=0;
    }
}
