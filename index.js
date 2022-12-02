//prepping for word game "hangman"
// 1 pick a random word from an array v
// 2 take a players guess input using prompt v
// 3 quit the game if player wants to quit v
// 4 Check if player guess is a letter in the word v
// 5 Keep track of guesses and letters guessed v
// 6 show the player their progress v
// 7 Show the player if the word is right v
// 8 Create game loop v
/* 
let fetchedData = [];

function createButtons() {
  topics.forEach((t) => {
    let btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = t;
    document.querySelector('.buttons').append(btn);

    btn.addEventListener('click', (e) => {
      topic = e.target.textContent;
      fetchWords(topic);
      console.log(topic);
    });
  });
}
console.log(topic);

console.log(fetchedData);
createButtons();

async function fetchWords(input) {
  const response = await fetch(`https://api.datamuse.com/words?ml=${input}`);
  const data = await response.json();
  fetchedData.push(
    data.map((d) => {
      d.word, console.log(d.word);
    })
  );
} */

/* 
fetch(`https://api.datamuse.com/words?ml=${topic}`)
  .then((response) => response.json())
  .then((data) => {
    fetchedData.push(data.map((word) => word.word));
  });
console.log(fetchedData); */

// button to play game
const btn = document.querySelector('.btn').addEventListener('click', playGame);

// only using this short array, could be more words, can change this if needed, could also use an api with words too fetch from
const wordsArr = [
  'gamer',
  'coder',
  'player',
  'javascript',
  'arrays',
  'state',
  'css',
  'coding',
  'programming',
  'agile',
  'developer',
  'node',
  'postman',
  'react',
  'next',
  'wordpress',
  'hyper',
  'education',
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
];

/* const secretWord = fetchedData[Math.floor(Math.random() * fetchedData.length)]; */

// creating the game loop
function playGame() {
  // get a random word from the words array
  const secretWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  // Declaring variable for player Guess
  let playerGuess;
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
  alert(
    'Welcome! \nThis is a hangman (word guessing) game \nTo play continue with pressing OK' +
      '\nThe word is ' +
      answerArr +
      ' : ' +
      secretWord.length +
      ' characters long'
  );

  while (remainingLetters > 0 && guesses > 0) {
    // create a variable for boolean to later add true or false for guesses control
    let guessIsMatch;
    // regex to check if input is number or letter
    var regexCheckNumber = /^[0-9]+$/;
    var regexCheckLetter = /^[a-öA-Ö]+$/;
    // initializing the playerGuess variable by taking in the player input
    playerGuess = prompt(
      'Guess a letter!' +
        ' or click cancel to quit.' +
        '\nYour guessed letters ' +
        answerArr.join(' ') +
        '\nGuesses left: ' +
        guesses +
        '\nLetters remaining ' +
        remainingLetters
    );
    // check if sercretword has playerguess letter in it and answer array does not
    if (secretWord.includes(playerGuess) && !answerArr.includes(playerGuess)) {
      // looping over the secretWord and checking if the playerguessed letter is in the word and what position
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j] === playerGuess) {
          answerArr[j] = playerGuess;
          // decrease remaining letters in the word
          remainingLetters--;
          // guess is match so guesses remains
          guessIsMatch = 'match';
        }
      }
    } else if (playerGuess === null || playerGuess === '') {
      //check player guess is
      quitGame = true;
      /* alert('no input given, game will end!'); */
      break;
    } else if (
      playerGuess.length !== 1 ||
      !playerGuess.match(regexCheckLetter) ||
      playerGuess.match(regexCheckNumber)
    ) {
      alert('Please use letters only & one at a time');
    }
    // Alert if letter is already used checking the answer array and used letters array
    else if (
      answerArr.includes(playerGuess) ||
      usedLetters.includes(playerGuess)
    ) {
      alert('You already used this letter');
    } else {
      // update the game progress guess is match to no match and -1 on guesses
      // also push the letter that is not included in the word to used letters array
      guessIsMatch = 'nomatch';
      guesses--;
      usedLetters.push(playerGuess);
    }
    // game loop ending
    console.log(guesses);
  }
  // game endings
  if (guesses === 0) {
    alert(
      'Game over \nSorry You have no more guesses: ' +
        guesses +
        '\nThe word was: ' +
        secretWord +
        '\nYour guess progress ' +
        answerArr.join(' ')
    );
  } else if (quitGame === true) {
    alert("Sad You diden't want to continue, \nHave a great day! :D");
  } else {
    alert(
      'YOU WIN!' +
        '\nGood job buddy! The answer was ' +
        secretWord +
        '\nYour guess was: ' +
        answerArr.join('').toUpperCase()
    );
  }
  //game function ending
}

// what i worked on before and keeping it here till i move it to a new project
// ====================================================================================================================
/* 
console.log(
  'Letters of the word: ' +
    showArr +
    '\nis ' +
    answer.length +
    ' characters long ;)'
);

guessArr = guess.split('');
answerArr = answer.split('');

console.log('this is the word = ' + answerArr.join());

for (let i = 0, j = 0; i < answerArr.length; i++, j++) {
  if (guessArr.includes(answerArr[i]) && guessArr[j] !== answerArr[i]) {
    includedLettersArr.push(answerArr[j]);
    console.log(
      'these letters are right: ' +
        guessArr[j] +
        ' : ' +
        answerArr[i] +
        '\nThese letters are right but in wrong position; ' +
        '\n' +
        includedLettersArr
    );
  }
  if (guessArr[j] == answerArr[i]) {
    showArr[i] = answerArr[i];
  }
  if (!guessArr.includes(answerArr[i])) {
    console.log(
      '%c These letters are wrong: ' + guessArr[],
      'color: red; background: black;'
    );
    usedLettersArr.push(guessArr[j]);
  }
  console.log('used letters: ' + usedLettersArr);
  console.log('right letters ' + showArr);
}
 */
