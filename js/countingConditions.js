function calculatioonWithorWithoutOperation (targetClick, keyKeyboard){
    if(targetClick === '=' || keyKeyboard === '=') {
        if(secondNumber === '') {
            secondNumber = firstNumber;
        }
        calcOperation();
        }
    else if (targetClick === '+' || targetClick === '-' || 
                targetClick === '*' || targetClick === '/' || targetClick === '%') {
                    calcOperation();
        }
    else if (keyKeyboard === '+' || keyKeyboard === '-' || 
                keyKeyboard === '*' || keyKeyboard === '/' || keyKeyboard === '%') {
                    calcOperation();
                    } 
                }

