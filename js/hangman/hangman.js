//imports
/* import { theKeyboard, sayHi, sayBye } from './keyboard.js'; */

const welcome = document.querySelector('.welcome');
console.log(welcome);
/* console.log(sayHi('Rob'));
console.log(sayBye('Rob')); */
// button to play game

/* function greet(name) {
  let el = document.createElement('h2');
  el.textContent = sayHi(name);
  welcome.append(el);
}

greet('Rob');
 */
/* theKeyboard(); */

function theKeyboard(e) {
  const active = 'active';
  const inactive = 'inactive';

  const keyboard = document.querySelector('.keyboard');
  const inputWord = document.querySelector('.input_word');

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

  keyboardKeys.map((l) => {
    const button = document.createElement('button');
    button.classList.add('key_btn');
    button.textContent = l;
    keyboard.append(button);

    button.addEventListener('click', function () {
      let l = this.textContent;
      inputWord.append(l);
      /* userInput = l; */
    });
  });
}

theKeyboard();

let userInput;
/* const btn = document.querySelector('.btn').addEventListener('click', playGame); */

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

// creating the game loop
function playGame() {
  // get a random word from the words array, one const ;)

  const secretWord = randomWord(wordsArr);

  // Declaring variable for player Guess

  // creating an array to hold the right guessed letters
  let answerArr = [];

  // used letters array, that is not included in the word
  let usedLetters = [];

  // quit game initialization set to false
  let quitGame = false;

  /* looping thru the secret word and adding it to the answer array 
so the player will see how many letters there is and
also show progress of the word if guess is right */

  for (let i = 0; i < secretWord.length; i++) {
    answerArr[i] = '_';
  }

  //creating guesses variable with 6 chances
  let guesses = 6;
  // showing how many letter remain for the right word
  let remainingLetters = secretWord.length;

  // Alert to show the info of the game
  /* alert(
    'Welcome! \nThis is a hangman (word guessing) game \nTo play continue with pressing OK' +
      '\nThe word is ' +
      answerArr +
      ' : ' +
      secretWord.length +
      ' characters long'
  ); */

  let gameInfo = document.querySelector('.game_info');
  let p = document.createElement('p');
  p.textContent =
    'Welcome! \nThis is a hangman (word guessing) game \nTo play continue with pressing OK' +
    '\nThe word is ' +
    answerArr +
    ' : ' +
    secretWord.length +
    ' characters long';

  gameInfo.append(p);

  // removing while function while i figure this one out
  /* while (remainingLetters > 0 && guesses > 0) { */
  // regex to check if input is number or letter
  var regexCheckNumber = /^[0-9]+$/;
  var regexCheckLetter = /^[a-öA-Ö]+$/;
  // initializing the userInput variable by taking in the player input or cancel
  /* userInput = prompt(
      'Guess a letter!' +
        ' or click cancel to quit.' +
        '\nYour guessed letters ' +
        answerArr.join(' ') +
        '\nGuesses left: ' +
        guesses +
        '\nLetters remaining ' +
        remainingLetters
    ); */

  userInput = document.querySelector('.input_word').textContent;

  console.log('this is the userInputLetter: ' + userInput);
  // check if sercretword has userInput letter in it and answer array does not
  if (secretWord.includes(userInput) && !answerArr.includes(userInput)) {
    // looping over the secretWord and checking if the userInputed letter is in the word and what position
    for (let j = 0; j < secretWord.length; j++) {
      if (secretWord[j] === userInput) {
        answerArr[j] = userInput;
        // decrease remaining letters in the word
        remainingLetters--;
      }
    }
  } else if (userInput === null || userInput === '') {
    //check player guess is
    quitGame = true;
    /* alert('no input given, game will end!'); */
    /* break; */
  } else if (
    userInput.length !== 1 ||
    !userInput.match(regexCheckLetter) ||
    userInput.match(regexCheckNumber)
  ) {
    /* alert('Please use letters only & one at a time'); */
    console.log('Please use letters only & one at a time');
  }
  // Alert if letter is already used checking the answer array and used letters array
  else if (answerArr.includes(userInput) || usedLetters.includes(userInput)) {
    /* alert('You already used this letter'); */
    console.log('You already used this letter');
  } else {
    // update the game progress guess is match to no match and -1 on guesses
    // also push the letter that is not included in the word to used letters array
    guesses--;
    usedLetters.push(userInput);
  }
  // game loop ending
  console.log(guesses);
  /*  }  this is the end of the while loop */
  // game endings
  if (guesses === 0) {
    /* alert(
      'Game over \nSorry You have no more guesses: ' +
        guesses +
        '\nThe word was: ' +
        secretWord.toUpperCase() +
        '\nYour guess progress ' +
        answerArr.join(' ').toUpperCase()
    ); */
    console.log(
      'Game over \nSorry You have no more guesses: ' +
        guesses +
        '\nThe word was: ' +
        secretWord.toUpperCase() +
        '\nYour guess progress ' +
        answerArr.join(' ').toUpperCase()
    );
  } else if (quitGame === true) {
    console.log("Sad You diden't want to continue, \nHave a great day! :D");
    /*  alert("Sad You diden't want to continue, \nHave a great day! :D"); */
  } else {
    /* alert(
      'YOU WIN!' +
        '\nGood job buddy! The answer was ' +
        secretWord.toUpperCase() +
        '\nYour guess was: ' +
        answerArr.join('').toUpperCase()
    ); */
    console.log(
      'YOU WIN!' +
        '\nGood job buddy! The answer was ' +
        secretWord.toUpperCase() +
        '\nYour guess was: ' +
        answerArr.join('').toUpperCase()
    );
  }
  //game function ending
}
