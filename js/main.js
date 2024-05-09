'use strict';

console.log('main.js caricato');

// NUMERO VISUALIZZATO SULLA CALCOLATRICE

const operando = document.getElementById('elem');
let operando1;
let operando2;
let currentOperator;

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

// Aggiungere event listener a tutti i numeri (0-9):
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        selectNumber(numbers[i].innerText);
    })
}

// aggiungere event listener a tutti gli operatori
for (let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function (){
        operando1=operando.innerText;
        operando.innerText = "";
        selectOperator(operators[i].innerText);

    })
}

function selectNumber(selectedNumber){
    // quando si clicca su un numero, concatenarlo al numero visualizzato in alto
    if(operando.innerText=="0") operando.innerText = selectedNumber;
    else operando.innerText += selectedNumber;
}

function selectOperator(selectedOperator){
    // quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
    currentOperator=selectedOperator;

}