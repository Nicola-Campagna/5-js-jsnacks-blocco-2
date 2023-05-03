// inserire un numero
let userNumber = parseInt(prompt('inserisci un numero'));

// SE il valore inserito è un numero
if (!isNaN(userNumber)) {

    // SE il n* è pari stampalo
    if (userNumber % 2 == 0) {
        console.log("numero pari: " + userNumber);
    }
    // ALTRIMENTI stampa il n* successivo
    else {
        // incremento di 1 il valore inserito dall'utente
        userNumber++;
        console.log(userNumber + " numero successivo");
    }
}
// ALTRIMENTI il valore inserito non è un numero
else {
    alert("il valore inserito non è un numero !")
}