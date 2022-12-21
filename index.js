const lines = document.querySelectorAll('.text');
let currIdx = 0;

function animateNextLine() {
  lines.forEach((t) => (t.style.display = 'none'));
  currIdx = currIdx % lines.length;

  lines[currIdx].style.animation = 'text-animation 3s';
  lines[currIdx].style.animationDirection = 'alternate';

  lines[currIdx].style.display = 'block';
  currIdx++;

  setTimeout(animateNextLine, 3000);
}

animateNextLine();
