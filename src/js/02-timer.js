import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startBtn = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');
const inputRef = document.querySelector('#datetime-picker');

startBtn.addEventListener('click', onTimerBtnClick);

isNotActiveStartBtn();

const fp = flatpickr(inputRef, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      return Notify.failure('Please choose a date in the future', {
        clickToClose: true,
      });
    }
    isActiveStartBtn();
  },
});

function onTimerBtnClick() {
  isNotActiveStartBtn();
  isNotActiveInput();

  let intervalId = null;
  intervalId = setInterval(() => {
    const delta = fp.selectedDates[0] - Date.now();

    if (delta <= 0) {
      return clearInterval(intervalId);
    }

    const timer = convertMs(delta);
    renderTime(timer);
  }, 0);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function renderTime({ days, hours, minutes, seconds }) {
  daysRef.textContent = days;
  hoursRef.textContent = hours;
  minutesRef.textContent = minutes;
  secondsRef.textContent = seconds;
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function isNotActiveStartBtn() {
  startBtn.disabled = true;
}
function isActiveStartBtn() {
  startBtn.disabled = false;
}
function isNotActiveInput() {
  inputRef.disabled = true;
}
