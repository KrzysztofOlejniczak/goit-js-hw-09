'use strict';

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
  intervalId = setInterval(backgroundColorChange, 1000);
  stopBtn.disabled = false;
  startBtn.disabled = true;
};

const stopColorChange = () => {
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
