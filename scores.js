'usestrict';
let scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44
];

let costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29
];

let highScore, bestSolutions, mostCostEffective;

function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;

    for (let i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);

        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }

    return highScore;
}

function getBestResults(scores, highScore) {
    let bestSolutions = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === highScore) {
            bestSolutions.push(i);
        }
    }

    return bestSolutions;
}

function getMostCostEffectiveSolution(bestSolutions, costs) {
    let cost = 100;
    let solutionIndex;
    let lowCostIndex;

    for (let i = 0; i < bestSolutions.length; i++) {
        solutionIndex = bestSolutions[i];

        if (cost > costs[solutionIndex]) {
            lowCostIndex = solutionIndex;
            cost = costs[solutionIndex];
        }
    }

    return lowCostIndex;
}

highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);

bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);

mostCostEffective = getMostCostEffectiveSolution(bestSolutions, costs);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective");

/*
Bubble solution #0 score: 60
Bubble solution #1 score: 50
Bubble solution #2 score: 60
.....
Bubbles tests: 36
Highest bubble score: 69
Solutions with highest score: #11, #18
*/