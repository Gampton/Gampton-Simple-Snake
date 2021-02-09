var s;
var scl = 30;
var food;

function setup() {
  //var cnv = createCanvas((parseInt(windowWidth/scl))*scl, (parseInt(windowHeight/scl))*scl); - this is full screen
  cnv = createCanvas(600,600)
  cnv.style('display', 'block');
  s = new Snake();
  frameRate(12);
  pickLocation();
}

function windowResized() {
  //resizeCanvas((parseInt(windowWidth/scl))*scl, (parseInt(windowHeight/scl))*scl);
  resizeCanvas(600,600)
  pickLocation()
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)),floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(200);
  
  s.death();
  s.update();
  s.show();

  if (s.eat(food)) {
    pickLocation();
  }   
  
  fill(255,0,100);
  rect(food.x, food.y, scl, scl,7)
} 

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0,-1); 
  } else if (keyCode === DOWN_ARROW){
    s.dir(0,1)
  } else if (keyCode === RIGHT_ARROW){
    s.dir(1,0 )
  } else if (keyCode === LEFT_ARROW){
    s.dir(-1,0)
  } else if (keyCode === 87) {
    s.dir(0,-1);
  } else if (keyCode === 83){
    s.dir(0,1)
  } else if (keyCode === 68){
    s.dir(1,0 )
  } else if (keyCode === 65){
    s.dir(-1,0)
  } 
}


