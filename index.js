// keeping the old code blow, testing new code





















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
} 



const btn = document.querySelector('.btn').addEventListener('click', playGame);


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


function playGame() {
 
  const secretWord = wordsArr[Math.floor(Math.random() * wordsArr.length)];
  
  let playerGuess;
  
  let answerArr = [];
 
  let usedLetters = [];

  let quitGame = false;

  for (let i = 0; i < secretWord.length; i++) {
    answerArr[i] = '_';
  }


  let guesses = 6;

  let remainingLetters = secretWord.length;

  alert(
    'Welcome! \nThis is a hangman (word guessing) game \nTo play continue with pressing OK' +
      '\nThe word is ' +
      answerArr +
      ' : ' +
      secretWord.length +
      ' characters long'
  );

  while (remainingLetters > 0 && guesses > 0) {
   
    let guessIsMatch;
   
    var regexCheckNumber = /^[0-9]+$/;
    var regexCheckLetter = /^[a-öA-Ö]+$/;
   
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
   
    if (secretWord.includes(playerGuess) && !answerArr.includes(playerGuess)) {
     
      for (let j = 0; j < secretWord.length; j++) {
        if (secretWord[j] === playerGuess) {
          answerArr[j] = playerGuess;
         
          remainingLetters--;
         
          guessIsMatch = 'match';
        }
      }
    } else if (playerGuess === null || playerGuess === '') {
     
      quitGame = true;
      
      break;
    } else if (
      playerGuess.length !== 1 ||
      /* !playerGuess.match(regexCheckLetter) || */

    /*  playerGuess.match(regexCheckNumber)
    ) {
      alert('Please use letters only & one at a time');
    }
    
    else if (
      answerArr.includes(playerGuess) ||
      usedLetters.includes(playerGuess)
    ) {
      alert('You already used this letter');
    } else {
     
      guessIsMatch = 'nomatch';
      guesses--;
      usedLetters.push(playerGuess);
    }
    
    console.log(guesses);
  }
  
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
 
}
 */
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
