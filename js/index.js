const calculatorNumbers = document.querySelector('.buttons-in-calc');
let calculatorInput = document.querySelector('.input-number');
let firstNumber = '';
let secondNumber = '';
let operation = '';
let calculateResult = '';
calculatorInput.value = 0;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']
const operations = ['+', '-', '=', '/', '%', '*']


calculatorNumbers.addEventListener('click',(event) =>{
    event.preventDefault();
    console.log('prevent');
    
    numbersInInput(event);
    onClearAc(event)
    addNumber(event)
})

function addNumber(event){
    const number = event.target.textContent;
    console.log('num', number)
    if(numbers.includes(number)){
        firstNumber += number;
    }
    console.log('first num',firstNumber)

    if(operations.includes(number)){
        operation = number;
        console.log('oper', operation)
    }
}

function onClearAc (event){
    if (event.target.textContent === 'AC') {
        firstNumber = '';
        secondNumber = '';
        operation = '';
        calculateResult = '';
        calculatorInput.value = 0;
        console.log('AC')
        return
    }
}

function numbersInInput(event){
    if((event.target.classList.contains('btn'))){
        console.log(event.target.textContent);
        calculatorInput.value = event.target.textContent;
    } 
}