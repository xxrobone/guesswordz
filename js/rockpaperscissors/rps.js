console.log('js connected');

const body = document.body;
let result = document.querySelector('.alert_box');
let playerPointsTxt = document.querySelector('#player-points');
let botPointsTxt = document.querySelector('#bot-points');
const btn = document.querySelector('.submit_btn');

const game = document.querySelector('.game');

result.textContent = 'Result';
// player vs bot & result

let player;
let bot;

let playerPoints = 0;
let botPoints = 0;

function createIcon(input, className) {
  input = document.createElement('i');
  input.classList.add('fa-solid', className);
  return input;
}

const rock = createIcon('rock', 'fa-hand-fist');
const paper = createIcon('paper', 'fa-hand');
const scissors = createIcon('scissors', 'fa-hand-peace');

let choicesArr = ['rock', 'paper', 'scissors'];

function botChoice() {
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
}

function playerChoice() {
  let choice = document.querySelector('input[name="radio"]:checked').value;
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
  return botOutput;
}

function gameUI(playerIcon, botIcon) {
  game.classList.add('game');
  body.appendChild(game);

  game.innerHTML = '';

  // adding class to player and bot transform
  playerIcon.classList.add('player_icon');
  botIcon.classList.add('bot_icon');

  if (playerIcon === botIcon) {
    playerIcon.classList.add('draw');
    game.append(playerIcon);
    /* setTimeout(function () {
      playerIcon.classList.remove('draw');
      game.remove(playerIcon);
      console.log('icons removed');
    }, 3000); */
  } else {
    game.append(playerIcon, botIcon);
   /*  setTimeout(function () {
      playerIcon.classList.remove('player_icon');
      botIcon.classList.remove('bot_icon');
      game.remove(playerIcon, botIcon);
      console.log('icons removed');
    }, 3000); */
  }
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  playerChoice();
  botChoice();
  gameUI(playerUI(player), botUI(bot));
  console.log('player variable is now: ' + player);
  gameRound(player, bot);
});

function gameRound(player, bot) {
  if (player === 'rock' || player === 'scissors' || player === 'paper') {
    // result
    if (player === bot) {
      result.textContent = 'Its a draw';
      console.log(
        '%c Player choice: ' +
          player +
          '\nBot choice: ' +
          bot +
          '\n\nIt´s a Draw!',
        'background: #222; color: #ffd500'
      );
      /*  alert(
      'Player choice: ' + player + '\nBot choice: ' + bot + '\nIt´s a Draw!'
    ); */
    } else if (player === 'rock' && bot === 'scissors') {
      result.textContent = 'You Win!';
      playerPoints++;
      playerPointsTxt.textContent = playerPoints;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
      /*  alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!'); */
    } else if (player === 'scissors' && bot === 'paper') {
      result.textContent = 'You Win!';
      playerPoints++;
      playerPointsTxt.textContent = playerPoints;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
      /* alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!'); */
    } else if (player === 'paper' && bot === 'rock') {
      result.textContent = 'You Win!';
      playerPoints++;
      playerPointsTxt.textContent = playerPoints;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
        'background: #222; color: #90ee90'
      );
      /* alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!'); */
    } else {
      result.textContent = 'You Loose!';
      botPoints++;
      botPointsTxt.textContent = botPoints;
      console.log(
        '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!',
        'background: #222; color: #D2042D'
      );
      /*  alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!'); */
    }
  } else {
    console.log('No Choice is made must choose, rock or paper or scissors!');
  }
}

// game loop
/* while (playerPoints <= 5 || botPoints <= 5) {
  player = prompt(
    'play a round of rock, paper, scissors!' +
      '\nChoose rock, paper or scissors'
  );
  botChoice();
} */
/* 
if (player === 'rock' || player === 'scissors' || player === 'paper') {
  // result
  if (player === bot) {
    console.log(
      '%c Player choice: ' +
        player +
        '\nBot choice: ' +
        bot +
        '\n\nIt´s a Draw!',
      'background: #222; color: #ffd500'
    );
    alert(
      'Player choice: ' + player + '\nBot choice: ' + bot + '\nIt´s a Draw!'
    );
  } else if (player === 'rock' && bot === 'scissors') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'scissors' && bot === 'paper') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else if (player === 'paper' && bot === 'rock') {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!',
      'background: #222; color: #90ee90'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Win!');
  } else {
    console.log(
      '%c Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!',
      'background: #222; color: #D2042D'
    );
    alert('Player choice: ' + player + '\nBot choice: ' + bot + '\nYou Loose!');
  }
} else {
  console.log('You must write, rock or paper or scissors!');
  alert('You must write, rock or paper or scissors!');
}
 */
