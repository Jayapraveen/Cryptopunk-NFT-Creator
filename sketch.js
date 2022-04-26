let face = "FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF--FFF++FFFF--FF++F++FF--F++FFF--FFFFFFFFFFFF+FFFFFFFFF+FFFFFFFFFFFFFF+FFFFFFFFF+FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF+FFFFFFFFF+FFFFFFFFF--FFFFFFFFFFFFFFFFFF";

let lineLength = 10;
let backgroundColor = 100;
let strokeW = 10;
let angle = 45;
let step = 0;


function setup() {
  createCanvas(800, 800);
  strokeWeight(strokeW);
  angleMode(DEGREES);
}

function drawFace() {
  for (let i = 0; i < face.length; i++) {
    switch (face[i]) {
      case "F":
        line(0, 0, 0, -lineLength);
        translate(0, -lineLength);
        break;
      case "f":
        translate(0, -lineLength);
        break;
      case "+":
        rotate(angle);
        break;
      case "-":
        rotate(-angle);
        break;
      case "[":
        push();
        break;
      case "]":
        pop();
        break;
    }
  }
}

function drawHair() {
  push();
  fill(0);
  triangle(400, height / 7, 400, height / 4.4, 275, height / 4.4);
  pop();
}

function drawHat() {
  push();
  fill(0);
  quad(500, height / 6, 450, height / 4, 200, height / 4, 150, height / 6);
  arc(330, height / 6, 145, 160, 180, 0);
  pop();
}

function drawMouth(w, h) {
  push();
  strokeWeight(20);
  translate(w, h);
  for (let i = 0; i < 13; i++) {
    translate(i, 0);
    line(0, 0, lineLength, 0);
  }
  pop();
}

function drawNose(w, h) {
  push();
  strokeWeight(20);
  translate(w, h);
  for (let i = 0; i < 8; i++) {
    translate(i, 0);
    line(0, 0, lineLength, 0);
  }

  pop();
}

function drawGlasses(w, h) {
  push();

  translate(w, h);
  for (let i = 0; i < 26; i++) {
    translate(lineLength, 0);
    line(0, 0, lineLength, 0);
  }
  pop();
  push();
  rect(w + 60, h - 20, 60, 60);
  rect(w + 210, h - 20, 60, 60);
  pop();
}

function drawSquareEyes(w, h) {
  push();
  translate(w, h);
  rect(0, 10, 10, - lineLength);
  push();
  translate(0, 20);
  stroke(255);
  rect(0, 10, 10, - lineLength);
  translate(-20, 0);
  stroke(0);
  rect(0, 10, 10, -lineLength);
  pop();
  push();
  translate(-20, 0);
  stroke(255);
  rect(0, 10, 10, - lineLength);
  pop();
  pop();
}

function chooseEyes() {
  let ra = random(0, 1);
  let noiseValue = noise(1 - ra);
  if (noiseValue <= 0.5) {
    drawGlasses((width / 4) - 5, height / 2.6);
  }
  else {
    drawSquareEyes((width / 2) + 47, height / 2.5);
    drawSquareEyes((width / 2) - 100, height / 2.5);
  }
}


function paintFace() {
  push();
  let colorPool = [165, 230, 85];
  let colorValue = int(random(0,3));
  stroke(colorPool[colorValue]);
  fill(colorPool[colorValue]);
  rect(width / 4 + strokeW, height / 4 + 55, 246, 300);
  rect(width / 4 + strokeW, height / 1.45, 95, 250);
  quad(width / 4 + 105, height / 1.45, width / 4 + 252, height / 1.42, width / 4 + 200, height / 1.30, width / 4 + 105, height / 1.30);
  rect(width / 4 - 25, height / 2.10, 30, 40);
  quad((width / 4) + 15, (height / 3) - 20, (width / 2) + 51, (height / 3) - 20, (width / 2), height / 4, (width / 3), height / 4);
  pop();
}

function chooseHead() {
  let ra = random(0, 1);
  let noiseValue = noise(1 - ra);
  if (noiseValue <= 0.5) {
    drawHair();
  }
  else {
    drawHat();
  }
}

function draw() {
  background(50, 190, 180);
  push();
  translate(width / 4, height);
  drawFace(face);
  pop();
  paintFace();
  chooseEyes();
  chooseHead();
  //console.log(faceFill);
  drawNose((width / 2.4), height / 1.85);
  drawMouth((width / 2.7), height / 1.5);
  noLoop();
}
