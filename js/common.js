function addnumbersToCalc(number) {

    if (numbers.includes(number)) {
        if (secondNumber === '' && operation === '') {
            firstNumber += number;
            calculatorInput.value = firstNumber;
        }

        else if (firstNumber !== '' && secondNumber !== '' && result) {
            secondNumber += number;
            result = false;
            calculatorInput.value = secondNumber;
        }
        
        else {
            secondNumber += number;
            calculatorInput.value = secondNumber;
        }
        return;
    }
    
    if (operations.includes(number)) {
        return   operation = number;
    }
}

function addKeyBoardNumberOrButtonNumber (targetClass, keyKeyboard,targetClick) {
    if (targetClass.contains('input-number')) {
        number = keyKeyboard;
        addnumbersToCalc(number);
        
}
if (targetClass.contains('btn-calc')) {
    number = targetClick; 
    addnumbersToCalc(number);
}
} 