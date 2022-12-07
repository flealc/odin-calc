

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
    
    if (number.toString().includes('e') && number.toString().length > 9) {
        /*
        return '<a href="https://www.youtube.com/watch?v=oHg5SJYRHA0" ' +
            'style="text-decoration: none; color: black; font-size: 35px;">CLICK SCREEN TO RESET :(</a>';
         */
        if (confirm('Sorry, result is too large! Reset needed')) {
            window.location.href = "https://www.youtube.com/watch?v=oHg5SJYRHA0";
        }
        screen.innerHTML = ':( :( :(';
        return ':( :( :(';
    }
    else if (number.toString().includes('.') && (number.toString().length > 9)) {
        
       return number.toFixed(9 - number.toString().indexOf('.'));
    }
    else if (number.toString().length > 9) {
        return checkFormat(number.toExponential(0));
    }
    return number;
}

function displayUpdate(val) {
    
    if (newValue) {
        screen.innerHTML= `${val}`;
        newValue = false;
    }
    else {
        screen.innerHTML+= `${val}`;
    }
   
}

// Variables

const screen = document.querySelector('.screen');
let operandBuffer = 0;
let newValue = true;
let operator = undefined;


// Event listeners and DOM manipulation


const numKeys = document.querySelectorAll('.key.num');
numKeys.forEach(key => key.addEventListener('click', function(e) {
    if (screen.innerHTML.length < 9 || newValue) {
        displayUpdate(`${key.innerHTML}`);
    }
}));
    

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
        operator = undefined;
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

 


