"use strict";
let counter = 0;
let radius = 10;
let ellipseAlpha = (255,255,255);
let mouseOverlap = false;


const button1 = {
    x: 20,
    y: 20,
    width: 50,
    height: 30,
    color: {
        r: 255,
        g: 100,
        g2: 150,
        b: 0,
        b2: 50
    }
}
function setup() {
    console.log("go")
}

function draw() {
    createCanvas(600,600);
    background('#000000');
    drawButton();
    drawEllipses();
    console.log(counter);
    fill(255,255,255);
    
}

function mousePressed(){
    if (mouseOverlap===true){
        counter +=1; 
    }
}

function drawButton(){
    if ((mouseX>=button1.x&&mouseX<=button1.x+button1.width)&&(mouseY>=button1.y&&mouseY<=button1.y+button1.height)){
            fill(button1.color.r,button1.color.b2,button1.color.g2);
            mouseOverlap=true;
        } else {
        fill(button1.color.r,button1.color.b,button1.color.g);  
        mouseOverlap=false;
    }
    rect(button1.x,button1.y,button1.width,button1.height);
}

function drawEllipses(){
    if (counter>0){
        alpha(50);
        fill(255,255,255,40);
        ellipse(300,300,radius,radius);
    } if (counter>1){
        ellipse(300,300,radius+20,radius+20);
    } if (counter>2){
        ellipse(300,300,radius+40,radius+40);
    } if (counter>3){
        ellipse(300,300,radius+60,radius+60);
    } if (counter>4){
        ellipse(300,300,radius+80,radius+80);
    } if (counter>5){
        ellipse(300,300,radius+100,radius+100);
    } if (counter>6){
        ellipse(300,300,radius+120,radius+120);
    } if (counter>7){
        ellipse(300,300,radius+140,radius+140);
    } if (counter>8){
        ellipse(300,300,radius+160,radius+160);
    } if (counter>9){
        ellipse(300,300,radius+180,radius+180);
    } 
}
