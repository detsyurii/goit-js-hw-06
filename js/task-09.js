function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtnRef = document.querySelector('.change-color');
const colorTxtRef = document.querySelector('.color');

changeColorBtnRef.addEventListener('click', onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorTxtRef.textContent = color;
}