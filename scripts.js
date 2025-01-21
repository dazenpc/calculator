function add(num1, num2){
    return num1+num2
}

function multiply(num1, num2){
    return num1*num2
}

function subtract(num1, num2){
    return num1-num2
}

function divide(num1, num2){
    return num1/num2
}

let num1;
let num2;
let operator;

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            add(num1,num2)
            break
        case "-":
            subtract(num1,num2)
            break
        case "*":
            multiply(num1, num2)
            break
        case "/":
            divide(num1, num2)
            break
    }
}

const numberPad1To9 = document.querySelector('.oneToNine')

for(let i = 1; i <= 9 ; i++){
    const numberButton = document.createElement('button')
    numberButton.innerText = i;
    numberButton.setAttribute("style", "flex: 1 1 100px; font-size: 50px")
    numberPad1To9.appendChild(numberButton)
}

const numberPad0 = document.querySelector('.zero')
const numberButton = document.createElement('button')
numberButton.innerText = 0;
numberButton.setAttribute("style", "flex: 1; font-size: 50px")
numberPad0.appendChild(numberButton)