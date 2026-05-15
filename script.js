let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = []; //2
let numGuess = 1;

let playGame = true;
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = parseInt(userInput.value);
  console.log(guess);
  validateGuess(guess); //2
});

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter A Valid Number");
  } else if (guess < 1) {
    alert("Please Enter A Number more than 1");
  } else if (guess > 100) {
    alert("Please Enter A Number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanUpDisplay(guess);
      displayMesssage(`Game Over Number Random Number Was ${randomNumber}`);
      endGame();
    } else {
      cleanUpDisplay(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMesssage("You Guessed It Right");
    endGame();
  } else if (guess < randomNumber) {
    displayMesssage("Number Is too low");
  } else if (guess > randomNumber) {
    displayMesssage("Number Is Too higg");
  }
}

function cleanUpDisplay(guess) {
  userInput.value = "";
  guessSlot.innerHTML = guessSlot.innerHTML + `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMesssage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = "<h2 id='newGame'>Start New Game</h2>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
