let tickCounter = 0;
let tick = false;

function setup() {
  createCanvas(765, 100);
}

function draw() { 
  frameRate(60); // Framerate = 60 frames a second, or, (60 * 60) 3600 a minute.
  background('white');
  
  tickCounter = tickCounter + 0.001 // 60 frames a second means that I need to have 60 somethings to get to 0.06 a second. 0.001 * 60 = 0.06. 0.001 can later be a variable.
  
  if (tickCounter >= 0.06) {
    tick = true;
    tickCounter = 0;
  }

  if (tick == true) {
    print ("Tick!");
  }

  tick = false;
}