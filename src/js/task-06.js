
const inputRef = document.querySelector('#validation-input');


const onInputBlur = event => {
	if (event.currentTarget.value.length <= inputRef.dataset.length) {
		inputRef.classList.add('invalid');
	} else {
		inputRef.classList.add('valid');
		inputRef.classList.remove('invalid');
	}
};

inputRef.addEventListener('blur', onInputBlur);


