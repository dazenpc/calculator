let answer = 0;
let triggered = `NOPE!!`

let num;
let operator;

let isOperated = false;
let isTriggered = false;
let isInitialiazed = false;
let iswaitingForInput = true;
let symbol = '';
let prevOperation = '';

const displayContent = document.querySelector('.display')

function operate(event){
    if(isInitialiazed) 
        prevOperation = symbol;
    operator = event.target.innerText;
    isOperated = true;
    if(operator == '=' && !iswaitingForInput){
        operation(symbol);
    }
    else if(operator != '=' && !iswaitingForInput){
        if(isInitialiazed && prevOperation != operator){
            num = +displayContent.innerText;
            operation(prevOperation);
            prevOperation = symbol
            displayContent.innerText = answer;
        }
        else 
            operation(operator);   
    }
    if(!isTriggered)
        displayContent.innerText = answer;
    if(operator != '=') symbol = operator;
    
}

function operation(symbol){
    iswaitingForInput = true;
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
                if(!isInitialiazed){
                    answer = 1;
                    isInitialiazed = true;
                }
                answer *= num; 
                break;
            case '/':
                if(!isInitialiazed){
                    answer = num;
                    isInitialiazed = true;
                }
                else if(num == 0){
                    displayContent.innerText = triggered;
                    isTriggered = true;
                    answer = 0;
                    isInitialiazed = false;
                }
                else 
                    answer /= num;
                break;  
        }
}

function populateDisplay(event){
    iswaitingForInput = false;
    if(isTriggered) return;
    if(displayContent.textContent == 0 && event.target.innerText == 0){
        displayContent.innerText = 0;
        num = 0;
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

const utilitiesAndZero = document.querySelector('.utilitiesAndZero')

const backSpaceButton = document.createElement('button')
backSpaceButton.innerText = 'CE';
backSpaceButton.setAttribute("style", "flex: 1; font-size: 50px")
utilitiesAndZero.appendChild(backSpaceButton)

const numberButton = document.createElement('button')
numberButton.innerText = 0;
numberButton.setAttribute("style", "flex: 1; font-size: 50px")
numberButton.addEventListener("click", populateDisplay)
utilitiesAndZero.appendChild(numberButton)

const clearButton = document.createElement('button')
clearButton.innerText = 'C'
clearButton.setAttribute("style", "flex: 1; font-size: 50px")
clearButton.addEventListener("click", clearAll)
utilitiesAndZero.appendChild(clearButton)


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

function clearAll(event){
    answer = 0;
    isOperated = false;
    isTriggered = false;
    isInitialiazed = false;
    iswaitingForInput = true;
    symbol = '';
    displayContent.innerText = '';
}



