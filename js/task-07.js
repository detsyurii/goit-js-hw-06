const inputRangeRef = document.querySelector('#font-size-control');
const textRangeRef = document.querySelector('span');

textRangeRef.style.fontSize = (inputRangeRef.value) + 'px';

inputRangeRef.addEventListener('input', handlerText);

function handlerText(event) {
    textRangeRef.style.fontSize = (event.currentTarget.value) + 'px';
};