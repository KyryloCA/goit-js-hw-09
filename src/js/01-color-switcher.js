const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const bodyElement = document.querySelector('body');
let colorInterval = null;

startButton.addEventListener('click', onStartAction);
stopButton.addEventListener('click', onStopAction);

function onStartAction() {
  startButton.setAttribute('disabled', true);
  colorInterval = setInterval(
    () => (bodyElement.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function onStopAction() {
  startButton.removeAttribute('disabled', false);
  clearInterval(colorInterval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
