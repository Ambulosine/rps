/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let cards = ["Rock", "Scissors", "Paper"];
let resultDiv = document.getElementById("result");
let hands = document.getElementById("hands");
let playerScoreDiv = document.getElementById("player-score");
let endGameBtn = document.getElementById("endGameButton");
let bonusPoint = document.getElementById("bonus");
let total = document.getElementById("total");
let totalScore = { playerChoice: 0, computerChoice: 0 };
let computerscore = document.getElementById("computerscore");
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  return cards[choice];
}
// let computerChoice = getComputerChoice();
// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  let playerScore;
  if (playerChoice === computerChoice) {
    playerScore = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    playerScore = -1;
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    playerScore = -1;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    playerScore = -1;
  } else {
    playerScore = 1;
  }
  return playerScore;

  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  // Otherwise human loses (aka set score to -1)
  // return score
}
function getComputerScore(playerChoice, computerChoice) {
  let computerScore;
  if (playerChoice === computerChoice) {
    computerScore = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Paper") {
    computerScore = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Rock") {
    computerScore = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
    computerScore = 1;
  } else {
    computerScore = -1;
  }
  return computerScore;
}
// console.log(getComputerScore("Paper", "Rock"));
// const result = getComputerScore("Scissors", computerChoice);
// console.log({ result });
// console.log({ playerScore });
// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(playerScore, playerChoice, computerChoice) {
  // let playerScore = document.getElementById("player-score");
  if (playerScore === 0) {
    resultDiv.innerText = "It's a tie!";
  } else if (playerScore === -1) {
    resultDiv.innerText = " You Lose";
  } else {
    resultDiv.innerText = "You  Won!";
  }
  hands.innerText = `🤴 ${playerChoice} Vs 💻 ${computerChoice}`;
  playerScoreDiv.innerText = "Your Score is: " + playerScore;
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!
}
// // showResult(score, playerChoice, computerChoice);
// // ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  total.innerText = "Total Player Score: ";
  computerscore.innerText = "Computer Score: ";
  const computerChoice = getComputerChoice();
  const playerScore = getResult(playerChoice, computerChoice);
  const computerScore = getComputerScore(playerChoice, computerChoice);
  showResult(playerScore, playerChoice, computerChoice);
  totalScore["playerChoice"] += playerScore;
  total.innerText += " " + totalScore["playerChoice"];
  totalScore["computerChoice"] += computerScore;
  computerscore.innerText += " " + totalScore["computerChoice"];
}
// // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((button) => {
    button.onclick = () => onClickRPS(button.value);
  });
  //   // use querySelector to select all RPS Buttons
  //   // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  //   // 1. loop through the buttons using a forEach loop
  //   // 2. Add a 'click' event listener to each button
  //   // 3. Call the onClickRPS function every time someone clicks
  //   // 4. Make sure to pass the currently selected rps button as an argument
  //   // Add a click listener to the end game button that runs the endGame() function on click
}

// // ** endGame function clears all the text on the DOM **
endGameBtn.onclick = () => endGame();
function endGame() {
  hands.innerText = "";
  resultDiv.innerText = "";
  total.innerText = "";
  computerscore.innerText = "";
  playerScoreDiv.innerText = "";
  totalScore["playerChoice"] = "";
  totalScore["computerChoice"] = "";
}
playGame();

// API class

// // https://dog.ceo/api/breed/hound/images/random"
// const dogImgDiv = document.getElementById("dogImage");
// function getDog() {
// 	fetch("https://dog.ceo/api/breed/hound/images/random")
// 		.then((response) => response.json())
// 		.then((json) => {
// 			dogImgDiv.innerHTML = `<img src="${json.message}" height=400 width=400/>`;
// 		});
// }
// let getNewDog = document.getElementById("getNewDog");
// getNewDog.onclick = () => getDog();
// HTML API class

//   <body>
//     <button id="getNewDog">GET NEW DOG</button>
//     <div id="dogImage"><img src="" alt="" /></div>
//     <script src="playground.js"></script>
//   </body>
// </html>
