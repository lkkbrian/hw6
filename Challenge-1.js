//volume.js
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
  background(0);  
if (mouseIsPressed) {
  print("got mouse press for ", key);
    mySound.setVolume(0.5)
} else {
  mySound.setVolume(0.1)
}
}
