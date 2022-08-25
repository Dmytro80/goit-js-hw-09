const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

isActiveStartPositionBtns();

let intervalID;

function onStartBtnClick() {
  changeActiveOfBtns();
  changeBodyColor();
  intervalID = setInterval(() => {
    changeBodyColor();
  }, 1000);
}

function onStopBtnClick() {
  isActiveStartPositionBtns();
  clearInterval(intervalID);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function isActiveStartPositionBtns() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function changeActiveOfBtns() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function changeBodyColor() {
  const bodyColor = getRandomHexColor();

  document.body.style.backgroundColor = bodyColor;
}
