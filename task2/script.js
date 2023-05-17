const consoleLog = document.querySelector('#consoleLog');
const testTextField = document.querySelector('#testTextField');
const userText = document.querySelector('#userText');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

testTextField.addEventListener('click',() => {
    // тело обработчика
    alert('Показывает диалоговое окно с сообщением и кнопкой OK');
    // конец тела обработчика
})

userText.addEventListener ('click', () => {
    // тело обработчика
    prompt('В какой школе мы обучаемся?');
    // конец тела обработчика
});
