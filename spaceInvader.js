"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawInvader();

function drawInvader(){

    //background//
    context.beginPath();
    context.rect(25, 25, 300, 300);
    context.fill();

    //bovenste deel//
    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(50, 100, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(100, 100, 50, 50);
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(100, 50, 50, 50);
    context.fill();
    
    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(150, 50, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(200, 50, 50, 50);
    context.fill(); 

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(200, 100, 50, 50);
    context.fill(); 
    
    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(250, 100, 50, 50);
    context.fill(); 

    //onderste deel//
    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(150, 200, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(100, 250, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(150, 250, 50, 50);
    context.fill();

    context.beginPath();
    context.fillStyle = "#00ff00";
    context.rect(200, 250, 50, 50);
    context.fill();

}   