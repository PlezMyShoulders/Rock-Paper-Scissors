

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let computerChoice = getRandomIntInclusive(1, 3)

if (computerChoice == 1){
    computerSelection = "Rock";
} else if (computerChoice == 2) {
    computerSelection = "Paper";
} else {
    computerSelection = "Scissors";
}
/// computers input code ///
console.log (computerSelection)

let playerChoice = prompt ("Please select between Rock, Paper or Scissor.")

reference = playerChoice.toLowerCase();

let playerSelection

if (reference === "rock"){
    playerSelection = "Rock";
} else if (reference === "paper"){
    playerSelection = "Paper";
} else if (reference === "scissors"){
    playerSelection = "Scissors";
}else {
    prompt ("I do not recognize that input, please select Rock, Paper or Scissors.");
}
/// player input code ///
console.log (playerSelection)

if (playerSelection === computerSelection) {
    prompt = ("tie");
} else {
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        prompt ("Nice job you won that round.");
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        prompt ("Nice job you won that round.");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        prompt ("Nice job you won that round.");
        /// player won the round code ///
    } else if (playerSelection === "Rock" && computerSelection === "Paper"){
        prompt ("Sadly the computer bested you that round.");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        prompt ("Sadly the computer bested you that round.");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        prompt ("Sadly the computer bested you that round.");
    }
}