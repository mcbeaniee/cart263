"use strict";
let color = {
    r: 0,
    g: 0,
    b: 0
}

let isSquare = false;

function setup() {
    console.log("go")
    color.r=random(0,255);
    color.g=random(0,255);
    color.b=random(0,255);
}

function draw() {
    createCanvas(600,600);
    background('black');
    createEllipses();
    console.log(isSquare);
}

function keyPressed(){
    if (keyCode===32){
        color.r=random(0,255);
        color.g=random(0,255);
        color.b=random(0,255);
    }
}

function mousePressed(){
    isSquare = !isSquare;
}

function createEllipses(){
    fill(color.r,color.g,color.b);
    stroke(color.r-50,color.g-50,color.b-50);
    for(let x = 0; x < 600;x+=50){
        for(let y = 0; y < 600;y+=50){
            if (isSquare===false){
                ellipse(x+25,y+25,50,50);
            } else {
                rect(x,y,50,50);
            }
        }
    }
}

