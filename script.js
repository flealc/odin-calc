
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
    if (operator === "+") {
        return add(x, y);
    }
    return operator(x,y);
}

const screen = document.querySelector('.screen');
let operandBuffer = 0;

const keys = document.querySelectorAll('.key.num');
keys.forEach(key => key.addEventListener('click', (e) => displayUpdate(`${key.innerHTML}`)));

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => screen.innerHTML= '0')

const del = document.querySelector('#del');
del.addEventListener('click', () => screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1))

const plus = document.querySelector('#add');
plus.addEventListener('click', function() {
    if (operandBuffer !== 0) {
        operandBuffer = add(screen.innerHTML, operandBuffer)
        screen.innerHTML = `${operandBuffer}`
    }
});


function displayUpdate(val) {
    if (screen.innerHTML === '0') {
        screen.innerHTML= val;
    }
    else {
        screen.innerHTML+= val;
    }
    
}