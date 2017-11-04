"use strict";



let world;
let player;
let enemyController;
<<<<<<< HEAD
let sprites;
let inventory;
let gui;
=======
let sprite;
>>>>>>> f048c9c7df861339b506370ad4e9e0df9402b668
const SCALE = 50;
const enemyLimit = 10;
let canvas;
let bg;
let building;

let width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

let height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

function preload(){
  sprite = loadImage("http://i.imgur.com/x2OngvR.png");
}


function setup() {
  createCanvas(width, height);
  background(51);
  cursor(CROSS);
  angleMode(DEGREES);

  world = new World();
  player = new Player({x: width/2, y: height/2});
  enemyController = new EnemyController(enemyLimit);
  world.draw();
  loadPixels();
  building = new Building({x: 200, y: 200});
  inventory = new Inventory();
  gui = new GUI(inventory);
}

function draw(){
  background(51);
  updatePixels();
  player.update();
  player.checkCollision(enemyController.enemies);
  enemyController.update(building);
  building.draw();

  gui.draw(); //Have to be the last one to draw
}

function keyPressed(){
  // Add player controls
  if(keyCode === 87){
  	player.vel.y = -1;
  }
  else if(keyCode === 83){
  	player.vel.y = 1;
  }
  else if(keyCode === 65){
  	player.vel.x = -1;
  }
  else if(keyCode === 68){
  	player.vel.x = 1;
  }
}

function keyReleased(){
  // Stop player
  if(keyCode === 87 || keyCode === 83){
  	player.vel.y = 0;
  }
  else if(keyCode === 65 || keyCode === 68){
  	player.vel.x = 0;
  }
}

function mouseClicked(){
	player.shoot();
}






