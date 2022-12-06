

// Functions
function add(x,y) {
    return parseFloat(x) + parseFloat(y);
}

function subtract(x, y) {
    return parseFloat(x) - parseFloat(y);
}

function multiply(x,y) {
    return parseFloat(x) * parseFloat(y);
}

function divide(x, y) {
    if (x === '0' || y === '0') {
        return "NICE TRY!";
    }
    return parseFloat(x) / parseFloat(y);
}

function operate(operator, x, y) {
    if (operator === "+") {
        return checkFormat(add(x, y));
    }
    if (operator === "-") {
        return checkFormat(subtract(x, y));
    }
    if (operator === "×") {
        return checkFormat(multiply(x, y));
    }
    if (operator === "÷") {
        return checkFormat(divide(x, y));
    }
}


function checkFormat(number) {
    if (number.toString().includes('.') && (number.toString().length > 9)) {
        
       return number.toFixed(9 - number.toString().indexOf('.'));
    }
    return number;
}

function displayUpdate(val) {
    if (screen.innerHTML.length < 9) {
        if (newValue) {
            screen.innerHTML= `${val}`;
            newValue = false;
        }
        else {
            screen.innerHTML+= `${val}`;
        }
    }
}

// Variables

const screen = document.querySelector('.screen');
let operandBuffer = 0;
let newValue = true;
let operator = undefined;


// Event listeners and DOM manipulation
const keys = document.querySelectorAll('.key.num');
keys.forEach(key => key.addEventListener('click', (e) => displayUpdate(`${key.innerHTML}`)));

const ac = document.querySelector('#ac');
ac.addEventListener('click', () => {
    screen.innerHTML= '0';
    operandBuffer = 0;
    operator = undefined;
    newValue = true;
});

const del = document.querySelector('#del');
del.addEventListener('click', () => 
    screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1))

const eq = document.querySelector('#eq');
eq.addEventListener('click', () => {
    if (operator !== undefined && screen.innerHTML !== 'NICE TRY!'){
        screen.innerHTML = `${operate(operator, operandBuffer, screen.innerHTML)}`;
        newValue = true;
    }
    
});

const op = document.querySelectorAll('.op');
op.forEach(operationKey => operationKey.addEventListener('click', function() {
    if (operator != undefined) {
        screen.innerHTML = `${operate(operator, operandBuffer, screen.innerHTML)}`
    }
    operator = operationKey.innerHTML;
    operandBuffer = screen.innerHTML;
    newValue = true;
}));


const dot = document.querySelector('.dot');
dot.addEventListener('click', function(e) {
    if (!screen.innerHTML.includes('.')) {
        displayUpdate(`${dot.innerHTML}`)
    }
    
});

 


