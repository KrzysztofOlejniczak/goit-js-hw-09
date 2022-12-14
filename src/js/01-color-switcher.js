'use strict';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const body = document.body;
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let intervalId = null;

const stopBtnDisable = () => {
  stopBtn.disabled = true;
};

const backgroundColorChange = () => {
  body.style.backgroundColor = getRandomHexColor();
};

const startColorChange = () => {
  Notify.info('Starting background color change');
  intervalId = setInterval(backgroundColorChange, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
};

const stopColorChange = () => {
  Notify.info('Background color change stopped');
  clearInterval(intervalId);
  stopBtn.disabled = true;
  startBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

window.addEventListener('load', stopBtnDisable);
startBtn.addEventListener('click', startColorChange);
stopBtn.addEventListener('click', stopColorChange);
