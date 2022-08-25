const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
startBtn.disabled = false;
stopBtn.disabled = true;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

let intervalID;
function onStartBtnClick() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  intervalID = setInterval(() => {
    const bodyColor = getRandomHexColor();

    document.body.style.backgroundColor = bodyColor;
  }, 1000);
}

function onStopBtnClick() {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(intervalID);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
