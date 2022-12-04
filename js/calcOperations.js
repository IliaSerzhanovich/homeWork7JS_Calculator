function calcOperation() {
    if(firstNumber !== '' && secondNumber !== '' && operation !== ''){
            
        switch(operation) {
            case '+': firstNumber = Number(firstNumber) + Number(secondNumber);
            break;
    
            case '-': firstNumber = Number(firstNumber) - Number(secondNumber);
            break;
    
            case '*': firstNumber = Number(firstNumber) * Number(secondNumber);
            break;
    
            case '/': firstNumber = Number(firstNumber) / Number(secondNumber);
            break;
    
            case '%' : firstNumber = firstNumber / 100;
            break;
        }
                result = true;
                calculatorInput.value = firstNumber;
                secondNumber = '';
        
    }
    
   
}

function plusMinus(targetClick) {
    if(targetClick === '+/-') {
     if(firstNumber !== '') {
         firstNumber = firstNumber * -1;
         calculatorInput.value = firstNumber;
        } 
      if (secondNumber !=='') {
         secondNumber = secondNumber * -1;
         firstNumber = firstNumber * -1;
         calculatorInput.value = secondNumber;
        }
    }
 }

function tocka() {
    const tochka = document.querySelector('.btn-tochka');
     
    calculatorInput.value.includes('.')?tochka.setAttribute('disabled', '') : tochka.removeAttribute('disabled', '');
  
}

function onClearAc (targetClick,keyKeyboard) {
     
    if (keyKeyboard === 'Backspace' || targetClick === 'AC') {
        firstNumber = '';
        secondNumber = '';
        operation = '';
        result = '';
        calculatorInput.value = 0;
        return;
    }
}

