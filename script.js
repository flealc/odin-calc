
function add(x,y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x,y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function operate(operator, x, y) {
    return operator(x,y);
}

const screen = document.querySelector('.screen');
let displayValue = '';

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('click', (e) => displayUpdate(`${key.innerHTML}`)));

// TODO: Create a function that takes the operator and routes the computation to the right function while storing the intermediate
//result

//TODO: Maybe the screen numbers are a div inside the screen div?

function displayUpdate(val) {
    displayValue = displayValue + val;
    screen.innerHTML = displayValue;
    console.log(displayValue);
}