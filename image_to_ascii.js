/*
----- Coding Tutorial by Patt Vira ----- 
Name: ASCII Art (with Image)
Video Tutorial: https://youtu.be/4IyeLc6J1Uo

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/

let img; let size = 10; 
let asciiChar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,^`'. "
// let asciiChar = " .:-=+*#%@";
let inputFile;

function preload() {
  inputFile = createFileInput(handleFile);
  inputFile.position(10, 10);
}

function handleFile(file) {
  if (file.type === 'image') {
    img = loadImage(file.data, () => {
      img.resize(100, 0);
      size = width / img.width;
    });
  } else {
    console.error('Not an image file!');
  }
}

function setup() {
  createCanvas(400, 400);
  background(240);
  textSize(16);
  textAlign(CENTER, CENTER);
  text('Upload an image to convert to ASCII', width / 2, height / 2);
}

function draw() {
  if (!img) return;
  background(240);
  
  /* ---- Using pixels ---- */
  img.loadPixels();
  for (let i=0; i<img.width; i++) {
    for (let j=0; j<img.height; j++) {
      let pixelIndex = (i + j*img.width) * 4;
      let r = img.pixels[pixelIndex + 0];
      let g = img.pixels[pixelIndex + 1];
      let b = img.pixels[pixelIndex + 2];
      let a = img.pixels[pixelIndex + 3];
      
      // let bright = brightness(color(r, g, b))
      let bright = (r + g + b + a) / 3;
      let tIndex = floor(map(bright, 0, 255, 0, asciiChar.length));
      
      let x = i*size + size/2;
      let y = j*size + size/2;
      let t = asciiChar.charAt(tIndex);
      stroke(255);
      textSize(size);
      textAlign(CENTER, CENTER);
      text(t, x, y);
    }
  }

/* ---- Using get() ---- */
//   for (let i=0; i<img.width; i++) {
//     for (let j=0; j<img.height; j++) {
//       let pixelVal = img.get(i, j);
//       let c = brightness(pixelVal);
//       let tIndex = floor(map(c, 0, 100, 0 ,asciiChar.length));
      
//       let x = i*size + size/2;
//       let y = j*size + size/2;
//       let t = asciiChar.charAt(tIndex);
//       textSize(size);
//       textAlign(CENTER, CENTER);
//       text(t, x, y);
      
//     }
//   }
}