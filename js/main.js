'use strict';

console.log('main.js caricato');

// NUMERO VISUALIZZATO SULLA CALCOLATRICE

const operando = document.getElementById('elem');
let operando1;
let operando2;
let currentOperator="";

// const numbers = document.querySelectorAll('.number');
// const operators = document.querySelectorAll('.operator');
// const equalOperator = document.querySelector('.equal');
const buttons = document.querySelectorAll('.number,.operator,.equal');


for (let i=0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(e) {
        let classList = e.target.classList;
        console.log(classList);
        switch(true){
            case classList.contains('number'):
                selectNumber(e.target.innerText);
                break;

            case classList.contains('operator'):
                operando1=parseInt(operando.innerText);
                operando.innerText = "";
                selectOperator(e.target.innerText);
                break;

            case classList.contains('equal'):
                console.log(operando);
                console.log(operando2);
                operando2=parseInt(operando.innerText);
                operando.innerText = calculate();
                break;
        }
    })
}


// // Aggiungere event listener a tutti i numeri (0-9):
// for (let i = 0; i < numbers.length; i++){
//     numbers[i].addEventListener("click", function (){
//         selectNumber(numbers[i].innerText);
//     })
// }

// // aggiungere event listener a tutti gli operatori
// for (let i = 0; i < operators.length; i++){
//     operators[i].addEventListener("click", function (){
//         // salvere il primo operando
//         operando1=parseInt(operando.innerText);
//         // resettare il numero in alto
//         operando.innerText = "";
//         // salvare l'operatore cliccato
//         selectOperator(operators[i].innerText);

//     })
// }

// // aggiungere event listener al pulsante "=": quando si clicca su =
// equalOperator.addEventListener("click", function(){
//     // salvare il secondo operando
//     operando2=parseInt(operando.innerText);
//     // visualizzare il risultato in alto
//     operando.innerText = calculate();
// })

function selectNumber(selectedNumber){
    // quando si clicca su un numero, concatenarlo al numero visualizzato in alto
    if(operando.innerText=="0") operando.innerText = selectedNumber;
    else operando.innerText += selectedNumber;
}

function selectOperator(selectedOperator){
    // quando si clicca su un operatore, salvare l'operatore cliccato e il primo operando, quindi resettare il numero in alto
    currentOperator=selectedOperator;

}

function calculate() {
    // effetuare il calcolo corretto in base all'operatore
    switch(currentOperator){
        case "+":
            return operando1+operando2;
        case "-":
            return operando1-operando2;
        case "x":
            return operando1*operando2;
        case "/":
        if(operando2===0) return "ERROREEEEEEE";
        else return operando1/operando2;
    }
}