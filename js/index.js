const calculatorNumbers = document.querySelector('.buttons-in-calc');
let calculatorInput = document.querySelector('.input-number');
let firstNumber = '';
let secondNumber = '';
let operation = '';
let result = false;
calculatorInput.value = 0;
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const operations = ['+', '-', '/', '%', '*'];
const events = ['click', 'keydown'];

document.querySelector('.input-number').addEventListener('keyup', function() {
    let symbol = /\./g;
    if (this.value.match(symbol) && this.value.match(symbol).length >1){
    alert('Cлишком много точек , нажми Backspace или AC');
    this.value = this.value.slice(0, this.value.lastIndexOf('.'));
}
});

events.forEach((element) => {
calculatorNumbers.addEventListener (element,  (event) => {
    const targetClick = event.target.textContent;
    const keyKeyboard = event.key;
    const targetClass = event.target.classList;
    event.preventDefault();
    
    addKeyBoardNumberOrButtonNumber(targetClass,keyKeyboard, targetClick);
    plusMinus(targetClick, keyKeyboard);
    calculatioonWithorWithoutOperation(targetClick,keyKeyboard);
    tocka();
    onClearAc(targetClick, keyKeyboard);
  })
}); 