const input = document.getElementById("font-size-control");
const text = document.getElementById("text");


function changeSize() {
    const value = input.value;
   
    return text.style.fontSize = `${value}px`;
};

input.addEventListener('input', changeSize);