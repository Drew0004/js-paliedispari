const userWord = prompt('Inserisci una parola, verificherò se è palindorma');
console.log(userWord);

const reverseWord = reverseWords(userWord);

function reverseWords(){
    // let wordResult = userWord.split('');
    // console.log(wordResult);

    // wordResult = wordResult.reverse();
    // console.log(wordResult);

    // wordResult = wordResult.join('');
    // console.log(wordResult); 
    
    // versione abbreviata
    let wordResult = userWord.split('').reverse().join('');

    if (userWord == wordResult){
        alert('Perfetto! La tua parola è palindroma');
    }
    else{
        alert('La tua parola non è palindroma, riprova.');
    }
}
