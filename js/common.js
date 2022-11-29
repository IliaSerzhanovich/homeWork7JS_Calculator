const formCalculator = document.querySelector('.buttons-in-calc');
const inputCalc = document.querySelector('.input-number');
let firstNum =''
let secondNum =''
let operation =''
let result = ''
formCalculator.addEventListener('click', (event) => {
    event.preventDefault();
})

formCalculator.addEventListener('click', clickButton);




function clickButton (event){
   if(event.target.classList.contains('btn-ac')){
    firstNum = '';
    secondNum = '';
    operation = '';
    inputCalc.value = '0';
}

   if(event.target.classList.contains('btn-operation')){
    operation = event.target.textContent;
    inputCalc.value =''
    }
    
    if (event.target.classList.contains('btn-number')){
        inputCalc.value += event.target.textContent
        if(secondNum === '' && operation ===''){
            firstNum = inputCalc.value
        }
        else if (firstNum !== '' && operation !== ''){
            secondNum = inputCalc.value
        }

        if(firstNum !== '' && operation !== '' && secondNum !== ''){
            switch(operation){
                case '-': result = firstNum -secondNum
                inputCalc.value = result
                

                case '+': result = firstNum +secondNum
                inputCalc.value = result

                case '/': result = firstNum / secondNum
                inputCalc.value = result

                case '*': result = firstNum *secondNum
                inputCalc.value = result
            }
        }
        
    
   }
   console.log(firstNum, secondNum,operation)
}


