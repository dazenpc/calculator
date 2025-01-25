let answer = 0;
let triggered = `Can't divide by zero`

let num;
let operator;

let isOperated = false;
let isTriggered = false;
let isInitialiazed = false;
let iswaitingForInput = true;
let symbol = '';

const displayContent = document.querySelector('.display')

function operate(event){
    operator = event.target.innerText;
    isOperated = true;
    if(operator == '=' && !iswaitingForInput){
        operation(symbol);
        isEqualized = true;
    }
    else if(operator != '=' && !iswaitingForInput){
        operation(operator);
        isEqualized = false;    
    }
    if(!isTriggered)
        displayContent.innerText = answer;
    if(operator != '=') symbol = operator;
    
}

function operation(symbol){
    iswaitingForInput = true;
    if(num){
        switch(symbol){
            case '+':
                answer += num;
                isInitialiazed = true;
                break;
            case '-':
                if(!isInitialiazed){ 
                    answer = num;
                    isInitialiazed = true;
                }
                else{
                    answer -= num;
                }
                break;
            case '*':
                if(!answer) answer = 1;
                answer *= num; 
                break;
            case '/':
                if(!answer) answer = 1;
                if(num == 0){
                    displayContent.innerText = triggered;
                    isTriggered = true;
                }
                else answer /= num;
                break;  
        }
    }
}

function populateDisplay(event){
    iswaitingForInput = false;
    if(displayContent.textContent == 0 && event.target.innerText == 0){
        displayContent.innerText = 0;
    }
    else if(checkLength(displayContent.textContent) < 9){
        if(isOperated){
            displayContent.innerText = '';
            isOperated = false;
        }
        if(displayContent.textContent == 0){
             displayContent.innerText = ''; 
        }
        displayContent.innerText += event.target.innerText
        num = +displayContent.innerText;
    }
    
}

function checkLength(text){
    return text.length;
}

const numberPad1To9 = document.querySelector('.oneToNine')

for(let i = 1; i <= 9 ; i++){
    const numberButton = document.createElement('button')
    numberButton.innerText = i;
    numberButton.setAttribute("style", "flex: 1 1 100px; font-size: 50px")
    numberButton.addEventListener("click", populateDisplay)
    numberPad1To9.appendChild(numberButton)
}

const numberPad0 = document.querySelector('.zero')
const numberButton = document.createElement('button')
numberButton.innerText = 0;
numberButton.setAttribute("style", "flex: 1; font-size: 50px")
numberButton.addEventListener("click", populateDisplay)
numberPad0.appendChild(numberButton)


const addition = document.querySelector('.add');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const subtract = document.querySelector('.subtract');
const equalTo = document.querySelector('.equalTo');


addition.addEventListener("click", operate);
multiply.addEventListener("click", operate);
divide.addEventListener("click", operate);
subtract.addEventListener("click", operate);
equalTo.addEventListener("click", operate);



