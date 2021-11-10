const categoriesList = document.querySelector('#categories');
console.log(`Number of categories: ${categoriesList.children.length}`);


const categories = document.querySelectorAll('.item');


const fn = function (array) {
    array.forEach(categore => {
        console.log(`Category: ${categore.firstElementChild.textContent}`);
        console.log(`Elements: ${categore.lastElementChild.children.length}`);
        
    }); 
    return;
}

fn(categories);



// const fn = function (array) {
//     for (const categore of array) {
//         console.log(`Category: ${categore.firstElementChild.textContent}`);
//         console.log(`Elements: ${categore.lastElementChild.children.length}`);
//     }
//     return;
// }