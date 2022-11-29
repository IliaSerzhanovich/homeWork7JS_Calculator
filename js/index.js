const calculatorNumbers = document.querySelector('.buttons-in-calc');
let calculatorInput = document.querySelector('.input-number');
let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = false;
calculatorInput.value = 0;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
const operations = ['+', '-',  '/', '%', '*']


calculatorNumbers.addEventListener('click',(event) =>{
    event.preventDefault();
    numbersInInput(event);
    onClearAc(event)
    addNumber(event)
    calculateResult(event)
    plusMinus(event)
})


function plusMinus(event){
    if(event.target.textContent=== '+/-'){
       firstNumber = firstNumber * -1;
       calculatorInput.value = firstNumber;
    }
}
//if number true


function calculateResult (event) {


    if(event.target.textContent === '='){
        console.log('ravno')
        if(secondNumber === ''){
            secondNumber = firstNumber;
        }
        if(firstNumber !== '' && secondNumber !== '' && operation !== ''){
            console.log('vse ok')
            console.log(operation)
            switch(operation){
                case '+': firstNumber = Number(firstNumber) + Number(secondNumber);
                console.log('result', firstNumber)
                break;

                case '-': firstNumber = Number(firstNumber) - Number(secondNumber);
                console.log('result', firstNumber)
                break;

                case '*': firstNumber = Number(firstNumber) * Number(secondNumber);
                console.log('result', firstNumber)
                break;

                case '/': firstNumber = Number(firstNumber) / Number(secondNumber);
                console.log('result', firstNumber)
                break;

                case '%' : calculatePercent();
            }
            result = true;
            calculatorInput.value = firstNumber;
        }
    }
}

/* console.log(firstNumber,secondNumber, operation) */
function calculatePercent(){
    switch(operation){
        case '%': firstNumber = firstNumber / 100;
        calculatorInput.value = firstNumber;
        break;
    }
}

function addNumber(event){
    const number = event.target.textContent;
  
    if(numbers.includes(number)){
        if(secondNumber === '' && operation === ''){
          
            firstNumber += number;
     
            calculatorInput.value = firstNumber;
            
        }
        else if(firstNumber !== '' && secondNumber !== '' && result){
            secondNumber = number;
            result =false;
            calculatorInput.value = secondNumber;
        }

       

        else {
            secondNumber += number;
            calculatorInput.value =secondNumber
        }
        console.log(firstNumber,operation,secondNumber)
        return
    }
 


    if(operations.includes(number)){
        return   operation = number;
    }

   
}

function onClearAc (event){
    if (event.target.textContent === 'AC') {
        firstNumber = '';
        secondNumber = '';
        operation = '';
        result = '';
        calculatorInput.value = 0;
        console.log('AC')
        return
    }
}

function numbersInInput(event){
   
   if(event.target.classList.contains('btn-operation')){
        calculatorInput.value = '';
    }

    else if(event.target.classList.contains('btn')) {
        
        calculatorInput.value = event.target.textContent;
    } 
}

