// Assegno bottone
const submitButton = document.getElementById('special-button');

// Aggiungo evento al click
submitButton.addEventListener('click', function(){
    const userSelect = document.getElementById('user-select').value;
    console.log ("L'utente ha inserito " + userSelect, typeof userSelect);

    const userNumber = parseInt(document.getElementById('user-number').value);
    console.log ("L'utente ha inserito " + userNumber, typeof userNumber);




    let cpuNumber = randomNumber(1,5);
    console.log(cpuNumber, typeof cpuNumber);



    const myResult = mySum (userNumber,cpuNumber);
    console.log ("Il risultato è " + myResult);
})

// // Creo funzione che genera numeri random
// function randomNumber(min,max){
//     return Math.floor(Math.random() * (max- min +1)) + min;
// }

// let cpuNumber = randomNumber(1,5);
// console.log(cpuNumber, typeof cpuNumber);

// //Creo funzione che fa la somma
// function mySum(num1,num2){
//     const result = num1 + num2;
//     return result;
// }

// const myResult = mySum (userNumber,cpuNumber);
// console.log (myResult);

// Creo funzione che genera numeri random
function randomNumber(min,max){
    return Math.floor(Math.random() * (max- min +1)) + min;
}

//Creo funzione che fa la somma
function mySum(num1,num2){

    return num1 + num2;
}

