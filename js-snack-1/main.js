// inserire un numero
let number = parseInt(prompt('inserisci un numero'));

// SE il n* è pari stampalo
if (number % 2 == 0) {
    console.log("numero pari: " + number);
}
// ALTRIMENTI stampa il n* successivo
else {
    number++;
    console.log(number + " numero successivo");
}