const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');


input.addEventListener("input", (event) => {

    if (event !== '') {
        text.textContent = event.currentTarget.value;
    } else {text.textContent = 'Anonymous'}
});

