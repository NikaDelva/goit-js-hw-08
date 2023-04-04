import throttle from "lodash.throttle";
const formEl = document.querySelector('.feedback-form');
console.log(formEl);
const userDataStorage = {};

const fillContactForm = () => { 
    const userInfoLS = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (!userInfoLS) {
        return;
    }
    for (const key in userInfoLS) {
        formEl.elements[key].value = userInfoLS[key];
    }

};
fillContactForm()

const onFieldsInput = event => {
    const { target: onInputValue } = event;
    const inputFieldValue = onInputValue.value;
    const inputNameValue = onInputValue.name;
    userDataStorage[inputNameValue] = inputFieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(userDataStorage))
    console.log(userDataStorage)

}
const onFormSumbit = event => {
    event.preventDefault();
    formEl.reset();
    localStorage.removeItem('feedback-form-state');
}
formEl.addEventListener('input', throttle(onFieldsInput, 500));
formEl.addEventListener('submit', onFormSumbit);

