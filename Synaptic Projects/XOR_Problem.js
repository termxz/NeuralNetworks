var synaptic = require('synaptic');

console.log("Starting... XOR_Problem.js")

// Create our network layers. 2 Input Layers - 3 Hidden Layers - 1 Output Layer

var inputLayer = new synaptic.Layer(2);
var hiddenLayer = new synaptic.Layer(3);
var outputLayer = new synaptic.Layer(1);

// Once we created our layers with connect them using the project() function.

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

// After setting up the layers we create our neural network.

var neuralNetwork = new synaptic.Network({

    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer

});


// Train the network with a learning rate of 0.1
// Dont set the learning rate too high or you will risk overfitting your network.

var learningRate = .1;

// # of Iterations

var numberIterations = 20000;

for (var i = 0; i < numberIterations; i++) {

    // We call in the activation function. 
    // (By default the activation function uses Logsitic Sigmoid)

    // Then we backwards propagate and if the network made a mistake we give him the answer.

    neuralNetwork.activate([1, 0]);
    neuralNetwork.propagate(learningRate, [1]);

    neuralNetwork.activate([0, 1]);
    neuralNetwork.propagate(learningRate, [1]);

    neuralNetwork.activate([0, 0]);
    neuralNetwork.propagate(learningRate, [0]);

    neuralNetwork.activate([1, 1]);
    neuralNetwork.propagate(learningRate, [0]);

}

// After training our network we test it!

console.log(neuralNetwork.activate([1, 1])); // Should output a value near 0
console.log(neuralNetwork.activate([1, 0])); // Should output a value near 1
console.log(neuralNetwork.activate([0, 0])); // Should output a value near 0
console.log(neuralNetwork.activate([0, 1])); // Should output a value near 1
