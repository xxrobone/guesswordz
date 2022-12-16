const showResult = document.querySelector('.show_result');
const showIcon = document.querySelector('.show_icon');
const showText = document.querySelector('.show_text');
let playerScore = document.querySelector('#player');
let botScore = document.querySelector('#bot');
const startGame = document.querySelector('.start');
const restart = document.querySelector('.restart');
let choices = document.querySelectorAll('.choices_wrapper > ul > li > i');

const score = {
  player: 0,
  bot: 0,
};

startGame.addEventListener('click', gamePlay);

function gamePlay() {
  restart.style.display = 'block';
  choices.forEach((i) => {
    i.classList.add('active');
    i.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('player choice is: ' + e.target.id);
      const player = e.target.id;
      playerChoice(player);
      const bot = botChoice();
      gameUI(playerUI(player), botUI(bot));
      gameRound(player, bot);
    });
  });
}

function createIcon(input, className) {
  input = document.createElement('i');
  input.classList.add('fa-solid', className);
  return input;
}

const rock = createIcon('rock', 'fa-hand-fist');
const paper = createIcon('paper', 'fa-hand');
const scissors = createIcon('scissors', 'fa-hand-peace');

let choicesArr = ['rock', 'paper', 'scissors'];

function playerChoice(choice) {
  let player = '';
  if (choice === 'rock') {
    console.log('player choice rock');
    player = 'rock';
  } else if (choice === 'paper') {
    console.log('player choice paper');
    player = 'paper';
  } else if (choice === 'scissors') {
    console.log('player choice scissors');
    player = 'scissors';
  } else {
    console.log('you must choose');
  }
  return player;
}

function botChoice() {
  let bot = '';
  const randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      bot = choicesArr[0];
      break;
    case 2:
      bot = choicesArr[1];
      break;
    case 3:
      bot = choicesArr[2];
      break;
    default:
      break;
  }
  return bot;
}

function playerUI(playerInput) {
  let playerOutput;
  if (playerInput === 'rock') {
    playerOutput = rock;
  } else if (playerInput === 'paper') {
    playerOutput = paper;
  } else {
    playerOutput = scissors;
  }
  console.log(playerOutput);
  return playerOutput;
}

function botUI(botInput) {
  let botOutput;
  if (botInput === 'rock') {
    botOutput = rock;
  } else if (botInput === 'paper') {
    botOutput = paper;
  } else {
    botOutput = scissors;
  }
  console.log(botOutput);
  return botOutput;
}

function gameUI(playerIcon, botIcon) {
  if (playerIcon === botIcon) {
    playerIcon.classList.add('draw');
    botIcon.classList.add('draw');
    showIcon.append(playerIcon, botIcon);
    setTimeout(() => {
      playerIcon.classList.remove('draw');
      botIcon.classList.remove('draw');
    }, 2500);
  } else {
    playerIcon.classList.add('player_icon');
    botIcon.classList.add('bot_icon');
    showIcon.append(playerIcon, botIcon);
    setTimeout(() => {
      playerIcon.classList.remove('player_icon');
      botIcon.classList.remove('bot_icon');
    }, 2500);
  }
}

function gameRound(player, bot) {
  showResult.style.display = 'flex';
  setTimeout(() => {
    showIcon.innerHTML = '';
    showText.textContent = '';
    showResult.style.display = 'none';
  }, 3000);
  if (player === 'rock' || player === 'scissors' || player === 'paper') {
    if (player === bot) {
      showText.textContent = 'Its a draw';
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\n\nIt´s a Draw!',
        'background: #222; color: #ffd500'
      );
    } else if (player === 'rock' && bot === 'scissors') {
      showText.textContent = 'You Win!';
      score.player++;
      playerScore.textContent = score.player;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
    } else if (player === 'scissors' && bot === 'paper') {
      showText.textContent = 'You Win!';
      score.player++;
      playerScore.textContent = score.player;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
    } else if (player === 'paper' && bot === 'rock') {
      showText.textContent = 'You Win!';
      score.player++;
      playerScore.textContent = score.player;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
    } else {
      showText.textContent = 'You Loose!';
      score.bot++;
      botScore.textContent = score.bot;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!',
        'background: #222; color: #D2042D'
      );
    }
  } else {
    console.log('No Choice is made must choose, rock or paper or scissors!');
  }
}

function clearResult(e) {
  if (e.target == showResult) {
    showResult.style.display = 'none';
  }
}

window.addEventListener('click', clearResult);

function gameReset() {
  score.player = 0;
  score.bot = 0;
  playerScore.textContent = score.player;
  botScore.textContent = score.bot;
  showResult.style.display = 'none';
  restart.style.display = 'none';
}

restart.addEventListener('click', gameReset);
