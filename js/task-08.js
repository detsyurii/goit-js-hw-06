const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit (event) {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        return alert('Please make sure all fields are filled in correctly.');
    }

    const userData = {
        email: email.value,
        password: password.value,
    }

    console.log(userData);

    event.currentTarget.reset();

}


