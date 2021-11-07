

const input = document.getElementById('validation-input');


function validate() {
    if (input.value.length > input.dataset.length) {
       return input.classList.add('invalid');
    }
        
    if (0 < input.value.length && input.value.length <= input.dataset.length) {
        input.classList.remove('invalid')
        return input.classList.add('valid'); 
    }

     if (0 === input.value.length) {
       return input.classList.remove('valid', 'invalid'); 
    }
}

input.onblur = validate;











