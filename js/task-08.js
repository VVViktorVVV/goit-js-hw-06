const form = document.querySelector('.login-form');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const resp = {};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const [email, password] = event.target.elements;
    console.log(email);
    console.log(password);

    resp.email = email.value;
    resp.password = password.value;

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
        console.log(resp);
        form.reset();
    }
    
}
)










// form.addEventListener('submit', (event) => {
//     event.preventDefault();
    
//     const formData = new FormData(event.target);
//     const resp = {};
//     formData.forEach((value, name) => {

//         if (value === "") {
//             alert('Все поля должны быть заполнены!');
//             return
//         }
//         console.log(`${name}: ${value}`);
//         resp[name] = value;
//     })
//     console.log(resp);
//     form.reset();
// })
