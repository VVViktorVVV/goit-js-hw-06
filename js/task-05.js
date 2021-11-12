const input = document.querySelector('#name-input');
const text = document.querySelector('#name-output');


input.addEventListener("input", (event) => {
    if (input.value == '') {
        return text.textContent = 'Anonymous';
    }
    if (event !== '') {
      return text.textContent = event.currentTarget.value;  
    }
   
});

// input.onblur = function () {
//     if (input.value == '') {
//         return text.textContent = 'Anonymous';
//     }
// }