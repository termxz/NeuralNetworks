console.log("Starting... Agent.js");

function Agent() {

    this.pos = createVector(width / 2, height - 20);

    this.vel = createVector();
    this.acc = createVector();

    this.crashed = false;
    this.completed = false;

    this.fitness = 0;

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.calcFitness = function() {

        // Get the distance between the agent and the target

        var d = dist(this.pos.x, this.pos.y, target.x, target.y);

        // Set their fitness according to their distance from the target

        this.fitness = map(d, 0, width, width, 0);

        // In this case the Agent with the closest distance will have a high change of having an offspring

        // The Agent will also get rewarded if he completes the course
        if (this.completed) {
            this.fitness *= 10;
        }

        if (this.crashed) {
            this.fitness /= 10;
        }


    }

    this.update = function() {

        //this.applyForce(this.genes[count]);



        // Check if the Agent completed the course or crashed

        // Get the distance between us and the target
        var d = dist(this.pos.x, this.pos.y, target.x, target.y);
        //console.log("Distance: " + d);

        if (d < 20) {
            this.completed = true;
        }

        // Check top and bottom borders
        if (this.pos.y < 15 || this.pos.y > height - 5) {
            this.crashed = true;
        }

        // Check left and right borders
        if (this.pos.x < 15 || this.pos.x > width - 5) {
            this.crashed = true;
        }


        if (!this.completed && !this.crashed) {
            this.vel.add(this.acc);
            this.pos.add(this.vel);
            this.acc.mult(0);
            this.vel.limit(4);
        }

    }

    this.show = function() {
        push();

        noStroke();
        fill(255, 0, 0, 100);
        rect(this.pos.x, this.pos.y, 20, 20);

        pop();
    }

}