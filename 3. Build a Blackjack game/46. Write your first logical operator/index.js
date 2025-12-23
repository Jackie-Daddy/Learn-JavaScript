let hasSolvedChallenge = false
let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function

if (hasHintsLeft===false&&hasSolvedChallenge===false) {
    showSolution()
}

function showSolution() {
    if (!hasSolvedChallenge && !hasHintsLeft) {
        console.log("Showing the solution....")
    }
}