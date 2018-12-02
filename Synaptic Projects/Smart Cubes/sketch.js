console.log("Starting... sketch.js");

var lifespan = 200;
var count = 0;

var population;
var target;

// Text Elements | You must have p5.dom.js to create text elements

var frameC;

function setup() {
    // Setup canvas | 600 Width 600 Height
    createCanvas(600, 600);
    rectMode(CENTER);

    // Create our target
    target = createVector(width / 2, height- 550);

    // Create our population
    population = new Population(25);
    population.run();

    // Setup text elements
    frameC = createP();

}

function draw() {
    background(35, 35, 35);

    if (count == lifespan) {
        count = 0;
    }
    count++;

    population.show();

    // Setup our target object
    fill(0, 255, 0);
    rect(this.target.x, this.target.y, 20, 20);

    dispalyInfo();
}

function dispalyInfo() {

    frameC.html('Count: ' + count);

}