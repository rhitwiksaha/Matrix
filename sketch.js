let bitlines;

function setup() {
  createCanvas(1366, 768);
  bitlines = new Array(110);
  for(let i = 0; i < bitlines.length ; i++){
    bitlines[i] = new BitLine();
  }
}

function draw() {
  background(0);
  for(let i = 0; i < bitlines.length ; i++){
    bitlines[i].show();
    bitlines[i].fall();
  }

  for(let i = 0 ; i < bitlines.length ; i++){
    console.log(bitlines[i].y + " ");
  }
}
