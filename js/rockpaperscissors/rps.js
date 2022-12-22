const showResult = document.querySelector('.show_result');
const showIcon = document.querySelector('.show_icon');
const showText = document.querySelector('.show_text');
let playerScore = document.querySelector('#player');
let botScore = document.querySelector('#bot');
const startGame = document.querySelector('.start');
const restart = document.querySelector('.restart');
const quit = document.querySelector('.quit');
let choices = document.querySelectorAll('.choices_wrapper > ul > li > i');

// one way of going a score
let playerscore = 0;
let botscore = 0;

let wins = document.querySelector('.wins');
let losses = document.querySelector('.losses');

// and a easy beginner way
let playerWins = 0;
let playerLosses = 0;
/* 
playerWins++
wins.textContent = playerWins */

startGame.addEventListener('click', () => {
  showResult.style.display = 'none';
  showText.textContent = '';
  showIcon.innerHTML = '';
  restart.style.display = 'none';
  /* playerscore = 0;
  botscore = 0; */
  gamePlay();
});

function gamePlay() {
  /* playerScore.textContent = 0;
  botScore.textContent = 0; */
  startGame.textContent = 'playing...';
  startGame.classList.add('deactivate');
  restart.style.display = 'block';
  quit.style.display = 'block';
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
      winner(playerscore, botscore);
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
    }, 2000);
  } else {
    playerIcon.classList.add('player_icon');
    botIcon.classList.add('bot_icon');
    showIcon.append(playerIcon, botIcon);
    setTimeout(() => {
      playerIcon.classList.remove('player_icon');
      botIcon.classList.remove('bot_icon');
    }, 2000);
  }
}

/* const resultTimeout = setTimeout(() => {
  showIcon.innerHTML = '';
  showText.textContent = '';
  showResult.style.display = 'none';
}, 2500); */

function gameRound(player, bot) {
  showResult.style.display = 'flex';
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
      showText.textContent = 'Round goes to player!';
      playerscore++;
      playerScore.textContent = playerscore;
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\nRound goes to player!',
        'background: #222; color: #90ee90'
      );
    } else if (player === 'scissors' && bot === 'paper') {
      showText.textContent = 'Round goes to player!';
      playerscore++;
      playerScore.textContent = playerscore;
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\nRound goes to player!',
        'background: #222; color: #90ee90'
      );
    } else if (player === 'paper' && bot === 'rock') {
      showText.textContent = 'Round goes to player!';
      playerscore++;
      playerScore.textContent = playerscore;
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\nRound goes to player!',
        'background: #222; color: #90ee90'
      );
    } else {
      showText.textContent = 'Round goes to bot!';
      botscore++;
      botScore.textContent = botscore;
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\nRound goes to bot!',
        'background: #222; color: #D2042D'
      );
    }
  } else {
    console.log('No Choice is made must choose, rock or paper or scissors!');
  }
  /*  */
}

function winner(playerscore, botscore) {
  if (playerscore === 3 && botscore < 3) {
    playerWins++;
    wins.textContent = playerWins;
    console.log('player wins = ' + playerWins);
    setTimeout(() => {
      showIcon.innerHTML = '';
      showText.textContent = '';
      showResult.style.display = 'none';
    }, 6000);
    showResult.style.display = 'block';
    showText.textContent = 'Congrats YOU WIN! \nOh happy day, oh happy day!';
    showText.style.fontSize = '3rem';
    restart.classList.add('tryagain');
    restart.textContent = 'Try again?';
    choices.forEach((i) => {
      i.classList.remove('active');
    });
  } else if (botscore === 3 && playerscore < 3) {
    setTimeout(() => {
      showIcon.innerHTML = '';
      showText.textContent = '';
      showResult.style.display = 'none';
    }, 6000);
    playerLosses++;
    losses.textContent = playerLosses;
    console.log('player losses = ' + playerLosses);

    console.log('Round goes to bot! bot wins');
    showResult.style.display = 'block';
    showText.textContent = 'Sorry buddy! Bot is on fire today... try again ;D';
    showText.style.fontSize = '3rem';
    restart.classList.add('tryagain');
    restart.textContent = 'Try again';
    choices.forEach((i) => {
      i.classList.remove('active');
    });
  } else {
    setTimeout(() => {
      showIcon.innerHTML = '';
      showText.textContent = '';
      showResult.style.display = 'none';
    }, 2500);
    return;
  }
}

function clearResult() {
  startGame.textContent = 'play game';
  startGame.classList.remove('deactivate');
  location.reload();
}

restart.addEventListener('click', () => {
  console.log(
    'player score is : ' + playerscore + ' bot score is: ' + botscore
  );
  restart.classList.remove('tryagain');
  restart.textContent = 'restart';
  startGame.textContent = 'playing...';
  startGame.classList.add('deactivate');
  playerscore = 0;
  botscore = 0;
  playerScore.textContent = 0;
  botScore.textContent = 0;
  gamePlay();
});

quit.addEventListener('click', clearResult);
