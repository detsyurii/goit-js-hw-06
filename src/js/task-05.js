const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output')

const handleInputText = (event) => {
    const { value } = event.target;
    outputRef.textContent = value ? value : "Anonymous";
    
}

inputRef.addEventListener('input', handleInputText);