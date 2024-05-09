'use strict';

console.log('main.js caricato');

// NUMERO VISUALIZZATO SULLA CALCOLATRICE

const operando = document.getElementById('elem');

const numbers = document.querySelectorAll('.number');
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function (){
        selectNumber(numbers[i].innerText);
    })
}


function selectNumber(selectedNumber){
    if(operando.innerText=="0") operando.innerText = selectedNumber;
    else operando.innerText += selectedNumber;
}