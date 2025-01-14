"use strict";

const elipse = {
    x: 10,
    y: 10,
    width: 10,
    height: 10,
    color: {
        r: 255,
        g: 255,
        b: 255
    }
}
function setup() {
    console.log("go")
}

function draw() {
    createCanvas(400,400);
    background('#000000');
    drawEllipses(20,20,40,40,255,255,255);
    drawEllipses(70,70,80,80,125,0,50);
    drawEllipses(150,150,120,120,0,0,255);
}

function drawEllipses(x,y,width,height,r,g,b){
    push();
    fill(r,g,b);
    ellipse(x,y,width,height);
    pop();
}