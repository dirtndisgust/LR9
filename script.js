// ім'я гравця
let userName = prompt("Введіть ім'я:", "Гравець");
userName = userName.trim();
if(!userName) 
  userName ="Гравець";
document.getElementById("userName").textContent = userName;

// масиви карт і номіналів
let values = [6, 7, 8, 9, 10, 2, 3, 4, 11];
let deck = ['6.png', '7.png', '8.png', '9.png', '10.png', 'jack.png', 'queen.png', 'king.png', 'ace.png'];

let userScore = 0;
let computerScore = 0;
let round = 0;

// генерація індексу карти
function generateRandomIndex() {
  let index = Math.floor(Math.random() * deck.length);
  return index;
}

let startPlay = document.getElementById("startPlay");

// почати гру
startPlay.addEventListener("click", () => {
  if (round == 0)
    round = 1;

  let userIndex = generateRandomIndex();
  let computerIndex = generateRandomIndex();

  document.getElementById("userCard").src = "images/" + deck[userIndex];
  document.getElementById("computerCard").src = "images/" + deck[computerIndex];

  userScore += values[userIndex];
  computerScore += values[computerIndex];

  document.getElementById("userScore").textContent = `Бали: ${userScore}`; 
  document.getElementById("computerScore").textContent = `Бали: ${computerScore}`;

  document.getElementById("roundCounter").textContent = `Спроба ${round} з 3`;

  if (round == 3) {
    setTimeout(function(){
      showResult();
      resetGame();
    }, 30);
  } 
  else 
    round++;
})

// результат гри
function showResult(){
  let winner;
  if (userScore > computerScore)
    winner = userName;
  else if (userScore < computerScore)
    winner = "Комп'ютер";
  else
    winner = "Нічия";
  alert(`Переміг: ${winner}`);
}

// скинути гру
function resetGame(){
  userScore = 0;
  computerScore = 0;
  round = 0;

  document.getElementById("userScore").textContent = `Бали: ${userScore}`; 
  document.getElementById("computerScore").textContent = `Бали: ${computerScore}`;
  document.getElementById("userCard").src = "images/jack.png";
  document.getElementById("computerCard").src = "images/10.png";
  document.getElementById("roundCounter").textContent = `Спроба ${round} з 3`;

  alert("Зіграємо ще раз?");
}
