"use strict";

function setup() {
    console.log("go")
}

function draw() {
    createCanvas(600,600);
    background('#000000');
    noStroke();
    if (mouseX<200&&mouseX>0){
        fill('white');
    } else {
        fill('#34e8eb');
    }
    rect(0,0,200,height);
    if (mouseX>200&&mouseX<400){
        fill('white');
    } else {
        fill('#349eeb');
    }
    rect(200,0,200,height);
    if (mouseX>400&&mouseX<width){
        fill('white');
    } else {
        fill('blue');
    }
    rect(400,0,200,height);
}
