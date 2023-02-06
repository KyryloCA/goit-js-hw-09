import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    startButtonHandler(selectedDates[0].getTime(), Date.now());
  },
};

const myInput = document.querySelector('#datetime-picker');
const fp = flatpickr(myInput, options); // flatpickr

const startButton = document.querySelector('[data-start]');
startButton.setAttribute('disabled', true);
startButton.addEventListener('click', pressStart);

const timerDaysPlace = document.querySelector('[data-days]');
const timerHoursPlace = document.querySelector('[data-hours]');
const timerMinutesPlace = document.querySelector('[data-minutes]');
const timerSecondsPlace = document.querySelector('[data-seconds]');

let timerOne = null;

// ------------------------------------------------------

function pressStart() {
  myInput.setAttribute('disabled', true); //block datepicker
  timerOne = setInterval(checkTimer, 1000);
  startButton.setAttribute('disabled', true);
}

function checkTimer() {
  const milsecLeft = fp.selectedDates[0].getTime() - Date.now();
  if (milsecLeft <= 0) {
    clearInterval(timerOne);
    timerDraw();
    myInput.removeAttribute('disabled'); //unblock datepicker
    console.log('done ;)');
  } else {
    const timeLeft = convertMs(milsecLeft);
    timerDraw(timeLeft);
  }
}

function timerDraw(data) {
  if (!data) {
    timerDaysPlace.textContent = '00';
    timerHoursPlace.textContent = '00';
    timerMinutesPlace.textContent = '00';
    timerSecondsPlace.textContent = '00';
  } else {
    const { days, hours, minutes, seconds } = data;
    timerDaysPlace.textContent = addLeadingZero(days);
    timerHoursPlace.textContent = addLeadingZero(hours);
    timerMinutesPlace.textContent = addLeadingZero(minutes);
    timerSecondsPlace.textContent = addLeadingZero(seconds);
  }
}

function startButtonHandler(selectedDate, startDate) {
  if (selectedDate <= startDate) {
    startButton.setAttribute('disabled', true);
    window.alert('Please choose a date in the future');
    return;
  }
  startButton.removeAttribute('disabled');
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
