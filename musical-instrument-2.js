function preload() {
  mySound = loadSound('/tsunami.mp3');
}

function setup() {
  createCanvas(400, 400);
  mySound.setVolume(0.1);
  mySound.play()
  fft = new p5.FFT();
  mySound.amp(0.2);
}

function draw() {
  background(255);

  if (mySound.isPlaying()) {
    background(0);
    fill(random(255), random(255), random(255));
    noStroke();
    ellipse(random(400), random(400), 15, 15);
  } else {
    background(255);
  }
  
  var spectrum = fft.analyze();
  noStroke();
  fill(255,255,255);
  for (var i = 0; i< 400; i = i + 1){
    var x = map(i, 0, 400, 0, 400);
    var h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h /2)
  }
		var waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255,0,0); 
  strokeWeight(1);
  for (var i = 0; i< 400; i++){
    var x = map(i, 0, 400, 0, width);
    var y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();

  if (mouseIsPressed) {
    //fill(random(255), random(255), random(255));
    stroke(255);
    noFill();
    triangle(random(400), random(400), random(0), random(0));
  }
}
