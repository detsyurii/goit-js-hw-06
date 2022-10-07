

let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);


function onDecrementBtnClick() {
    counterValue -= 1;
    refs.counterValue.textContent = counterValue;
}

function onIncrementBtnClick() {
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
}
