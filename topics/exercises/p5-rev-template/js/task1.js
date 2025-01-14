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
    push();
    fill(elipse.color.r,elipse.color.g,elipse.color.b);
    ellipse(elipse.x,elipse.y,elipse.width,elipse.height);
    pop();
    push();
    fill(elipse.color.r - 100,elipse.color.g - 100,elipse.color.b - 100);
    ellipse(elipse.x + 100,elipse.y + 100,elipse.width +30,elipse.height + 30);
    pop();
    push();
    fill(elipse.color.r - 200,elipse.color.g - 200,elipse.color.b - 200);
    ellipse(elipse.x + 200,elipse.y + 200,elipse.width + 60,elipse.height + 60);
    pop();
}