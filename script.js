
function add(x,y) {
    return parseInt(x) + parseInt(y);
}

function subtract(x, y) {
    return parseInt(x) - parseInt(y);
}

function multiply(x,y) {
    return parseInt(x) * parseInt(y);
}

function divide(x, y) {
    if (x === '0' || y === '0') {
        return "NICE TRY!";
    }
    return parseInt(x) / parseInt(y);
}

function operate(operator, x, y) {
    if (operator === "+") {
        return add(x, y);
    }
    if (operator === "-") {
        return subtract(x, y);
    }
    if (operator === "×") {
        return multiply(x, y);
    }
    if (operator === "÷") {
        return divide(x, y);
    }
}

const screen = document.querySelector('.screen');
let operandBuffer = 0;
let newValue = true;
let operator = undefined;

const keys = document.querySelectorAll('.key.num');
keys.forEach(key => key.addEventListener('click', (e) => displayUpdate(`${key.innerHTML}`)));

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    screen.innerHTML= '0';
    operandBuffer = 0;
    operator = undefined;
    newValue = true;
})

const del = document.querySelector('#del');
del.addEventListener('click', () => 
    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1))

const eq = document.querySelector('#eq');
eq.addEventListener('click', () => {
    if (operator !== undefined && screen.innerHTML !== 'NICE TRY!'){
        screen.innerHTML = `${operate(operator, operandBuffer, screen.innerHTML)}`;
        newValue = true;
    }
    
})

const op = document.querySelectorAll('.op');
op.forEach(operationKey => operationKey.addEventListener('click', function() {
    if (operator != undefined) {
        screen.innerHTML = `${operate(operator, operandBuffer, screen.innerHTML)}`
    }
    operator = operationKey.innerHTML;
    operandBuffer = screen.innerHTML;
    newValue = true;
}));




function displayUpdate(val) {
    
    if (newValue) {
        screen.innerHTML= `${val}`;
        newValue = false;
    }
    else {
        screen.innerHTML+= `${val}`;
    }
}