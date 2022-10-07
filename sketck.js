let max_distance;

function setup() {
  createCanvas(710, 400);
  noStroke();
  max_distance = dist(0, 0, width, height);
}

function draw() {
  background(0);
  for (let i = 0; i <= width; i += 10) {
    for (let j = 0; j <= height; j += 10) {
      let size = dist(mouseX, mouseY, i, j);
      size = (size / max_distance) * 10;
      ellipse(i, j, size, size);
    }
  }
}
