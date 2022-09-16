const inputRangeRef = document.querySelector('#font-size-control');
const textRangeRef = document.querySelector('span');
textRangeRef.style.fontSize = "56px";

const handlerText = (event) => {
    textRangeRef.style.fontSize =`${event.target.value}px`;
};

inputRangeRef.addEventListener('input', handlerText);