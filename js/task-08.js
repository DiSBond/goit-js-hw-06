const emailInputEl = document.querySelector('input[name="email"]');
const passwordInputEl = document.querySelector('input[name="password"]');
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();
   
    if (emailInputEl.value === '' || passwordInputEl.value === '') {
        // console.log("Alert: Все поля должны быть заполнены");
        alert("Все поля должны быть заполнены");
    } else {
    const formElements = event.currentTarget.elements;

    const mail = formElements.email.value;
    const password = formElements.password.value;

    const formData = {
        mail,
        password
    }
        
        console.log(formData);

        form.reset();
    };
};

