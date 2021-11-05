const counterValue = {
    value: 0,

    increment() {
        this.value += 1;
    },

    decrement() {
        this.value -= 1;
    }
}

const incrementBtn = document.querySelector('.btn__increment');
const decrementBtn = document.querySelector('.btn__decrement');
const valueEl = document.getElementById('value');

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value;
    return;
})

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value;
    return;
})

