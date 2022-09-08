import resetControls from './controls.js';
import { updateTimerDisplay, resetTimer, countdown } from './timer.js';

const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonSet = document.querySelector('.set');
const buttonSoundOn = document.querySelector('.sound-on');
const buttonSoundOff = document.querySelector('.sound-off');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let timerTimeOut;


buttonPlay.addEventListener('click', () => {
  buttonPlay.classList.add('hide');
  buttonPause.classList.remove('hide');
  buttonStop.classList.remove('hide');
  buttonSet.classList.add('hide');

  countdown();
})

buttonPause.addEventListener('click', () => {
  buttonPause.classList.add('hide');
  buttonPlay.classList.remove('hide');

  clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', () => {
  resetControls()
  clearTimeout(timerTimeOut)
  resetTimer()
})

buttonSoundOn.addEventListener('click', () => {
  buttonSoundOn.classList.add('hide');
  buttonSoundOff.classList.remove('hide');
})

buttonSoundOff.addEventListener('click', () => {
  buttonSoundOn.classList.remove('hide');
  buttonSoundOff.classList.add('hide');
})

buttonSet.addEventListener('click', () => {
  let newMinutes = prompt('Quantos minutos?') || 0;
  if(!newMinutes) {
    resetTimer();
    return;
  }

  minutes = newMinutes;
  updateTimerDisplay(minutes, 0);
})