// Assegno bottone
const submitButton = document.getElementById('special-button');

// Aggiungo evento al click
submitButton.addEventListener('click', function(){
    const userSelect = document.getElementById('user-select').value;
    console.log ("L'utente ha inserito " + userSelect, typeof userSelect);

    const userNumber = parseInt(document.getElementById('user-number').value);
    console.log ("L'utente ha inserito " + userNumber, typeof userNumber);

    let cpuNumber = randomNumber(1,5);
    console.log("Il computer ha generato " + cpuNumber, typeof cpuNumber);
    document.getElementById('cpu-number').innerHTML=cpuNumber;
    
    const myResult = mySum (userNumber,cpuNumber);
    console.log ("Il risultato è " + myResult);

    const oddEven = isEven(myResult);
    console.log("Il risultato è pari? " + oddEven);
    
    if ( oddEven==userSelect){
        alert('Ho vinto ;)');
    }else{
        alert('Ho perso :c');
    }
    
})

// Creo funzione che genera numeri random
function randomNumber(min,max){
    return Math.floor(Math.random() * (max- min +1)) + min;
}

//Creo funzione che fa la somma e controlla se è pari o dispari
function mySum(num1,num2){

    return num1 + num2;

}

//Creo una funzione che analizza il risultato per determinare se è pari o no
function isEven(myResult) {
    if (myResult % 2 == 0) {
        return 'even';
    }

    return 'odd';
}






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


