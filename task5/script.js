let buttonEvent = document.querySelector('button');
let inp = document.querySelector('input');

buttonEvent.addEventListener('click', (event) =>{
    event.which === 1;
    console.log(event);
});

inp.addEventListener('submit', (event) => {
    event.preventDefault();
    document.querySelector('duplicateField').value = textContent;
})
