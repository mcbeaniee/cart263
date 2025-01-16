"use strict";
let testString = 'test';
let textX1 = 0;
let textY1 = 0;

function setup() {
    console.log("go")
}

function draw() {
    createCanvas(600,600);
    background('black');
    fill('white');
    textAlign(CENTER,CENTER);
    text(testString,300,300);
    horizontalLoop();
}

function horizontalLoop(){
    for (let counter1 = 15; counter1>0; counter1-=1) {
        for (let counter2 = 0; counter2<10; counter2+=1){
            textX1 = counter2*10
            text(counter2,textX1+10,10);
        }
        textY1 = counter1*15;
        text(counter1,10,textY1+10);
    }
}

