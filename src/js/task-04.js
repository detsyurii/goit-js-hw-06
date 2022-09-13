let counterValue = 0;

const refs = {
    incrementBtn: document.querySelector('[data-action="increment"]'),
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    counterValue: document.querySelector('#value'),
};

refs.incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    refs.counterValue.textContent = counterValue;
});
refs.decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    refs.counterValue.textContent = counterValue;
});

