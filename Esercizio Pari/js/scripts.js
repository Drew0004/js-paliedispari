const submitButton = document.getElementById('special-button');



submitButton.addEventListener('click', function(){
    const userSelect = document.getElementById('user-select').value;
    console.log ("L'utente ha inserito " + userSelect, typeof userSelect);

    const userNumber = document.getElementById('user-number').value;
    console.log ("L'utente ha inserito " + userNumber, typeof userNumber);
})




