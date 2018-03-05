//millis.js
function preload() {
  mySound = loadSound('/tsunami.mp3');
}
function setup() {
  createCanvas(400, 400);
  mySound.setVolume(0.1);
  mySound.play()
  mySound.amp(0.2);
}

function draw() {
  background(220);
var ms = millis();
text('Milliseconds \nrunning: \n' + ms, 150, 200);
} 
