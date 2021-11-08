const button = document.querySelector('.change-color');
const body = document.querySelector('.body');
const colorName = document.querySelector('.color');



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBgColor() {
  let color = getRandomHexColor();
  colorName.textContent = `${color}`;
  body.style.backgroundColor = `${color}`;
   
}

button.onclick = changeBgColor;

