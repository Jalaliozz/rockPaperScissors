const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock") {
        return userInput;
    } else if (userInput === "paper") {
        return userInput;
    } else if (userInput === "scissors") {
        return userInput;
    } else if (userInput === "bomb") {
        return userInput;
    } else {
        return console.log("Error. Pick one of the three choices, dumbass.");
    }
};

function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie now you can go die.";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "A dumb box beat you...";
        } else {
            return "Nice, you're still a degenerate";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Dumb box 1, Monkey 0";
        } else {
            return "I wish I could self desruct right now";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "You lose, mate";
        } else {
            return "You win, mate";
        }
    }
    if (userChoice === "bomb") {
        return "You fucking cheater";
    }
}

var playGame = () => {
    let userChoice = getUserChoice("paper");
    var computerChoice = getComputerChoice();
    console.log(`You chose: ${userChoice}`);
    console.log(`The computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
};

playGame();