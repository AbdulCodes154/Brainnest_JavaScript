function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let randomChoice = Math.floor(Math.random() * 3);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === 'rock') {
    if (computerSelection === 'Rock') {
      return 'Tie!';
    } else if (computerSelection === 'Paper') {
      return 'You lose! Paper beats Rock';
    } else {
      return 'You win! Rock beats Scissors';
    }
  } else if (playerSelection === 'paper') {
    if (computerSelection === 'Rock') {
      return 'You win! Paper beats Rock';
    } else if (computerSelection === 'Paper') {
      return 'Tie!';
    } else {
      return 'You lose! Scissors beats Paper';
    }
  } else if (playerSelection === 'scissors') {
    if (computerSelection === 'Rock') {
      return 'You lose! Rock beats Scissors';
    } else if (computerSelection === 'Paper') {
      return 'You win! Scissors beats Paper';
    } else {
      return 'Tie!';
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Choose Rock, Paper, or Scissors');
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    console.log(result);
    if (result.includes('win')) {
      playerScore++;
    } else if (result.includes('lose')) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log('You win the game!');
  } else if (playerScore < computerScore) {
    console.log('You lose the game.');
  } else {
    console.log('The game is a tie.');
  }
}

game();