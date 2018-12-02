console.log("Starting... Population.js");

function Population(popsize) {

    this.agents = [];

    // Population Settings
    this.popsize = popsize;

    // Populate our array of Agents
    this.run = function() {

        for (var i = 0; i < this.popsize; i++) {
            this.agents[i] = new Agent();
        }

    }

    // Update and show each all of the agents on the array
    this.show = function() {

        for (var i = 0; i < popsize; i++) {

            this.agents[i].update();
            this.agents[i].show();

        }

    }

}