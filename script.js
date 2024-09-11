//variables
	let humanChoice = ''
	let computerChoice = ''
	let winner = ''
	let humanScore = 0
	let computerScore = 0


//functions
	function process() {
		getComputerChoice()
		playRound(humanChoice, computerChoice)

		document.querySelector("#pcommand").innerText = "You commanded: " + humanChoice

		document.querySelector("#ccommand").innerText = "Computer commanded: " + computerChoice

		document.querySelector("#cscore").innerText = "Current Score = " + humanScore + " vs " + computerScore

		document.querySelector("#winna").innerText = "Winner: " + winner


	}



	function getComputerChoice() {
		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		}
	    let randomInt = getRandomInt(3)
    	switch (randomInt) {
    		case 0:
    			computerChoice = "Saber";
    			break;
    		case 1:
    			computerChoice = "Lancer";
    			break;
    		case 2:
    			computerChoice = "Archer";
    			break;
    	}
    		return computerChoice
    }

	function playRound() {

		if (humanChoice === computerChoice) {
			winner = "You tied!";
		} else if (humanChoice === "Saber" && computerChoice === "Archer") {
			winner = "Archer beats Saber! Computer won!";
			++computerScore;
		} else if (humanChoice === "Archer" && computerChoice === "Saber") {
			winner = "Archer beats Saber! You won!";
			++humanScore;
		} else if (humanChoice === "Saber" && computerChoice === "Lancer") {
			winner = "Saber beats Lancer! You won!";
			++humanScore;
		} else if (humanChoice === "Lancer" && computerChoice === "Saber") {
			winner = "Saber beats Lancer! Computer won!";
			++computerScore;
		} else if (humanChoice === "Archer" && computerChoice === "Lancer") {
			winner = "Lancer beats Archer! Computer won!";
			++computerScore;
		} else if (humanChoice === "Lancer" && computerChoice === "Archer") {
			winner = "Lancer beats Archer! You won!";
			++humanScore;
		} else {
			winner = "Something went wrong!"
		}
	}


//events
	document.querySelector('#Saber').onclick = function() {
		humanChoice = "Saber";
		process()
	}

	document.querySelector('#Lancer').onclick = function() {
		humanChoice = "Lancer";
		process()
	}

	document.querySelector('#Archer').onclick = function() {
		humanChoice = "Archer";
		process()
	}

	document.querySelector('#Reset').onclick = function() {
		location.reload()
	}