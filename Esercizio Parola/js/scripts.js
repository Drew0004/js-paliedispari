const userWord = prompt('Inserisci una parola, verificherò se è palindorma').toLowerCase();
console.log(userWord);

const reverseWord = reverseWords(userWord);

function reverseWords(word){
    // let wordResult = userWord.split('');
    // console.log(wordResult);

    // wordResult = wordResult.reverse();
    // console.log(wordResult);

    // wordResult = wordResult.join('');
    // console.log(wordResult); 
    
    // versione abbreviata
    let wordResult = word.split('').reverse().join('');

    if (word == wordResult){
        alert('Perfetto! La tua parola è palindroma');
        return true;
    }
    else{
        alert('La tua parola non è palindroma, riprova.');
        return false;
    }
}
