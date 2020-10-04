
var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var car1, car2, car3, car4;
var cars;
var form;
var car1i, car2i, car3i, car4i, track;
function preload(){
    car1i= loadImage("car1.png");
    car2i = loadImage("car2.png");
    car3i = loadImage("car3.png");
    car4i = loadImage("car4.png");
    track = loadImage("track.jpg");
}
function setup(){
    createCanvas(displayWidth-30, displayHeight-140);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
   
    

}

function draw(){
    background("white");
    if(playerCount === 4){
        game.updateState(1);
    }
    if(gameState ===1){
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
    
}
