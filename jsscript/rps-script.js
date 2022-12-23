


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const computerChoice = getRandomIntInclusive(1, 3)

let computerSelection = computerChoice
if (computerSelection = 1){
    let computer = "Rock";
} else if (computerSelection = 2) {
    let computer = "Paper";
} else {
    let computer = "Scissors";
}



console.log (computerSelection)