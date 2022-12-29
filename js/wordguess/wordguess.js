let gameInfo = document.querySelector('.info');
const startButton = document.querySelector('.btn_start');
const quitButton = document.querySelector('.btn_quit');
const restartButton = document.querySelector('.btn_restart');
const keyboard = document.querySelector('.keyboard');
const guessesLeft = document.querySelector('.guesses');
const word = document.querySelector('.secret_word');
const userGuess = document.querySelector('.user_guess');
const msg = document.querySelector('.msg');
const keyMsg = document.querySelector('.key_msg > span');
let wrongLetters = document.querySelector('.wrong_letters');

startButton.addEventListener('click', function () {
  resetHtmlValues();
  setValues();
  openBtns();
  /* guesses = 6;
  answerArr = [];
  usedLetters = [];
  wordHtml = '';
  win = false; */
  quitButton.style.display = 'block';
  restartButton.style.display = 'block';
  gameLoop();
});

quitButton.addEventListener('click', () => {
  location.reload();
});

restartButton.addEventListener('click', () => {
  resetHtmlValues();
  setValues();
  openBtns();
  startButton.textContent = 'guessing... again';
  createEmtpySecretWord();
  let againText = `
        <p>
        How nice you want an other try... 
        The word to guess </br> ${answerArr.join(' , ')}  
        </br>is ${secretWord.length} characters long
        </p>
        `;

  createInfo(againText);
  guessesLeftText(guesses);
});

function resetHtmlValues() {
  gameInfo.innerHTML = '';
  wrongLetters.textContent = '';
  userGuess.textContent = '';
}
function createInfo(input = '') {
  /* gameInfo.innerHTML = ''; */
  setTimeout(() => {
    gameInfo.innerHTML = input;
  }, 300);
}

let welcomeText = `<p>
Welcome! </br>
This is a word guessing game </Br>
(like hangman if you played it before) </br>
To play press START
</p>
`;
createInfo(welcomeText);

const keyboardKeys = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

keyboardKeys.map((letter) => {
  const button = document.createElement('button');
  button.classList.add('key_btn');
  button.setAttribute('disabled', '');
  button.style.pointerEvents = 'none';
  button.textContent = letter;
  keyboard.append(button);
});

function c() {
  keyMsg.textContent = 'you cant use the keyboard if you dont start the game';
  setTimeout(function () {
    keyMsg.textContent = '';
  }, 3000);
  console.log('keyboard clicked');
}
keyboard.addEventListener('click', c);

// only using this short array, could be more words, could also use an api with words too fetch from
const wordsArr = [
  'css',
  'try',
  'new',
  'way',
  'node',
  'next',
  'word',
  'code',
  'home',
  'from',
  'done',
  'bros',
  'show',
  'know',
  'mode',
  'flow',
  'beat',
  'skin',
  'thin',
  'tank',
  'bank',
  'none',
  'join',
  'coin',
  'neon',
  'life',
  'wife',
  'file',
  'mile',
  'style',
  'dance',
  'state',
  'react',
  'hyper',
  'gamer',
  'coder',
  'agile',
  'fresh',
  'editor',
  'folder',
  'animal',
  'arrays',
  'coding',
  'player',
  'culture',
  'postman',
  'wordpress',
  'developer',
  'education',
  'javascript',
  'programming',
];

// creating a function for taking a random word from array of words
function randomWord(inputArr) {
  let randomWord;
  // check that array actully is an array
  if (
    Array.isArray(inputArr) &&
    inputArr !== null &&
    inputArr !== undefined &&
    inputArr.length !== 0
  ) {
    randomWord = inputArr[Math.floor(Math.random() * inputArr.length)];
  } else {
    console.log('No array of words is found, need one to function');
  }
  return randomWord;
}

function openBtns() {
  let btns = document.querySelectorAll('.key_btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].removeAttribute('disabled', false);
    btns[i].style.pointerEvents = 'visible';
  }
}

function closeBtns() {
  let btns = document.querySelectorAll('.key_btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].setAttribute('disabled', '');
    btns[i].style.pointerEvents = 'none';
  }
}

let guesses, win, answerArr, usedLetters, wordHtml, secretWord;

function setValues() {
  // number of guesses
  guesses = 6;
  // win is false, set to true if word is guesses
  win = 'false';
  // creating an array to hold the right guessed letters
  answerArr = [];
  // used letters array, that is not included in the word
  usedLetters = [];
  // html variable to show the progress of the secret word
  wordHtml = '';
  // setting the secret word to a word from the array of words
  secretWord = randomWord(wordsArr);
  /* console.log('this is word from setting values: ' + secretWord); */
}

function createEmtpySecretWord() {
  for (let i = 0; i < secretWord.length; i++) {
    answerArr[i] = '_';
    wordHtml = `${answerArr.join('')}`;
    word.innerHTML = wordHtml;
  }
}

function guessesLeftText(guesses) {
  guessesLeft.textContent = `You have ${guesses} guesses left`;
}

// creating the game loop
function gameLoop() {
  //resetting values in beginning of gameloop
  /* setValues(); */

  // open buttons

  keyboard.removeEventListener('click', c);
  console.log('Game starts' + ' win is ' + win);
  startButton.textContent = 'guessing...';
  /* startButton.setAttribute('disabled', true); */
  startButton.removeEventListener('click', gameLoop);
  startButton.addEventListener('click', () => {
    startButton.textContent = 'Disabled';
    setTimeout(() => {
      startButton.textContent = 'guessing...';
    }, 1000);
  });

  /* looping thru the secret word and adding it to the answer array
so the player will see how many letters there is and
also show progress of the word if guess is right */

  /* for (let i = 0; i < secretWord.length; i++) {
    answerArr[i] = '_';
    wordHtml = `${answerArr.join('')}`;
    word.innerHTML = wordHtml;
  } */
  createEmtpySecretWord();

  //creating guesses variable with 6 chances

  /* guessesLeft.textContent = `You have ${guesses} guesses left`; */
  guessesLeftText(guesses);

  let secretEmptyWordText = `
        <p>
      The word to guess </br> ${answerArr.join(' , ')}  
        </br>is ${secretWord.length} characters long
        </p>
        `;

  createInfo(secretEmptyWordText);

  /* Player input on button click getting the textContent 'value'  */
  let btns = document.querySelectorAll('.key_btn');
  btns.forEach((i) => {
    i.addEventListener('click', async (e) => {
      console.log(e.target.textContent);
      let letter = await e.target.textContent;
      userGuess.textContent = letter;
      setTimeout(function () {
        userGuess.textContent = '';
      }, 2000);
      checkForMatch(letter);
      winOrLoss(guesses, win);
    });
  });

  function checkForMatch(userInput) {
    // check if sercretword has userInput letter in it and answer array does not
    if (secretWord.includes(userInput) && !answerArr.includes(userInput)) {
      // looping over the secretWord and checking if the userInputed letter is in the word and what position
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j] === userInput) {
          answerArr[j] = userInput;
          wordHtml = `${answerArr.join('')}`;
          word.innerHTML = wordHtml;

          console.log('the word so far : ' + answerArr.join(''));
          console.log(typeof answerArr.join(''));

          if (answerArr.join('') == secretWord) {
            console.log('the words match');
            win = 'true';
          } else {
            console.log('words dont match');
          }
          console.log('win is : ' + win);
          msg.textContent = 'You got that one right ;D';
          setTimeout(function () {
            msg.textContent = '';
          }, 2000);
        }
      }
    }
    // Show player if letter is already used checking the answer array and used letters array
    else if (answerArr.includes(userInput) || usedLetters.includes(userInput)) {
      console.log('You already used this letter');
      msg.textContent = 'You already used this letter';
      setTimeout(function () {
        msg.textContent = '';
      }, 2000);
    } else {
      // update the game progress guess is match to no match and -1 on guesses
      // also push the letter that is not included in the word to used letters array
      guesses--;
      guessesLeft.textContent = `You have ${guesses} guesses left`;
      usedLetters.push(userInput);
      wrongLetters.textContent = 'wrong guesses: ' + usedLetters.join('');
    }
  }

  // game endings
  function winOrLoss(guesses, win) {
    if (guesses === 0) {
      console.log(
        'Game over \nSorry You have no more guesses: ' +
          guesses +
          '\nThe word was: ' +
          secretWord.toUpperCase() +
          '\nYour guess progress ' +
          answerArr.join(' ').toUpperCase()
      );
      let gameOverText = `
      <p>
        Game over </br>
        Sorry You have no more guesses left </br>
        The word was: ${secretWord.toUpperCase()} </br>
        Your guess progress ${answerArr.join(' ').toUpperCase()}
      </p>
      `;
      createInfo(gameOverText);
      startButton.textContent = 'Oh my restart?...';
      startButton.setAttribute('disabled', true);
      closeBtns();
    } else if (guesses > 0 && win === 'true') {
      let winText = `
        <p>
        YOU WIN! </br>
        Good job buddy! The answer was:  ${secretWord.toUpperCase()} </br>
        You had ${guesses} guesses left :D
        </p>
        `;
      createInfo(winText);
      console.log(
        'YOU WIN!' +
          '\nGood job buddy! The answer was ' +
          secretWord.toUpperCase() +
          '\nYour guess was: ' +
          answerArr.join('').toUpperCase()
      );
      win = 'false';
      startButton.textContent = 'Yeah buddy!';
      startButton.style.color = '#6ec075';
      setTimeout(() => {
        startButton.textContent = 'restart? quit?';
        startButton.style.color = 'inherit';
      }, 3000);
      startButton.setAttribute('disabled', true);
      closeBtns();
    } else {
      return;
    }
  }

  //game function ending
}
