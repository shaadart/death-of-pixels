/*
----- Coding Tutorial by Patt Vira ----- 
Name: ASCII Art (with Video)
Video Tutorial: https://youtu.be/4IyeLc6J1Uo

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
// let asciiChar = " .:-=+*#%@";

let videoInput; vidw = 10; vidh = 10; scl = 10;
let w, h;

function setup() {
  createCanvas(vidw * scl, vidh * scl);
  videoInput = createCapture(VIDEO);
  videoInput.size(64, 48);
  videoInput.hide();

  let startButton = createButton('Start ASCII Conversion');
  startButton.position(10, 10);
  startButton.mousePressed(() => {
    loop();
  });

  let stopButton = createButton('Stop ASCII Conversion');
  stopButton.position(200, 10);
  stopButton.mousePressed(() => {
    noLoop();
  });

  noLoop();
}

function draw() {
  background(150);
  videoInput.loadPixels();

  for (let i = 0; i < videoInput.width; i++) {
    for (let j = 0; j < videoInput.height; j++) {
      let pixelIndex = (i + j * videoInput.width) * 4;
      let r = videoInput.pixels[pixelIndex + 0];
      let g = videoInput.pixels[pixelIndex + 1];
      let b = videoInput.pixels[pixelIndex + 2];

      let bright = (r + g + b) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));

      let x = i * 10 + 5;
      let y = j * 10 + 5;
      let t = asciiChar.charAt(tIndex);
      textSize(10);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }
}