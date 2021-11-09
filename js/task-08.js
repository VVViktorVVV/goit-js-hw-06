const form = document.querySelector('.login-form');
const resp = {};



form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const resp = {};
    formData.forEach((value, name) => {

        if (value === "") {
            alert('Все поля должны быть заполнены!');
            return
        }
        console.log(`${name}: ${value}`);
        resp[name] = value;
    })
    console.log(resp);
    form.reset();
})
