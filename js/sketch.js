let data = [];

let numberCircle = 4;
let circleAngle = 360/numberCircle;
let initialAngle = circleAngle - 90;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

function draw() {
  background(220);
  noStroke();

  for (let i=0; i < numberCircle; i++) {
    let x = 250 + 70 * cos(initialAngle + circleAngle*i);
    let y = 250 + 70 * sin(initialAngle + circleAngle*i);
    let newCircle = {
      x: x,
      y: y
    };
    newCircle.r = 100;
    newCircle.g = 200;
    newCircle.b = 200;
    data.push(newCircle);
    fill(data[i].r, data[i].g, data[i].b, 100);
    ellipse(data[i].x, data[i].y, 200, 200);

  }
}

function mousePressed() {
  for (let i=0; i < data.length; i++) {
    let d = dist(mouseX, mouseY, data[i].x, data[i].y);
    //console.log(mouseX, mouseY, data[i].x, data[i].y)
    if (d < 100) {
      data[i].r = random(255);
      data[i].g = random(255);
      data[i].b = random(255);
    }
  }
}

function addCircle() {
  numberCircle+=1;
  alert(numberCircle);
  // setup();
  // draw();
}

function removeCircle() {
  numberCircle-=1;
  // setup();
  // draw();
}

// let cnv;

// function centerCanvas() {
//   let x = (windowWidth - width) / 2;
//   let y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

// function setup() {
//   cnv = createCanvas(500, 500);
//   angleMode(DEGREES);
//   ellipseMode(CENTER);
// }

// function windowResized() {
//   centerCanvas();
// }
