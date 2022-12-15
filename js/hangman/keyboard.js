'use strict';
function theKeyboard() {
  const active = 'active';
  const inactive = 'inactive';

  const keyboard = document.querySelector('.keyboard');

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
  });
}

function sayHi(user) {
  return `Hello, ${user}!`;
}

function sayBye(user) {
  return `Bye, ${user}!`;
}

export { sayHi, sayBye, theKeyboard };
