const userTextField = document.querySelector('a');

userTextField.addEventListener('click', (event) => {;
    event.preventDefault();
    const userText = prompt('Вы хотите изменить адрес ссылки?');
    userTextField.textContent = userText;
});




