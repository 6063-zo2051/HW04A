function setup() {
  createCanvas(900, 900);
  noStroke();
}

function draw() {

  let currentTime1 = second();
  fill(30 + currentTime1, 30 + currentTime1 , 0);
  rect(0, 0, width / 3, height);

  let currentTime2 = minute();
  fill(30 + currentTime2, 0 , 0);
  rect(width / 3, 0, 2 * width / 3, height);

  let currentTime3 = hour();
  fill(0, 0 , 30 + currentTime3);
  rect(2 * width / 3, 0, width, height);

}
