// array A
const arrayA = [];
// array B
const arrayB = [];

// numero random per comporre il numero di elementi del mio array A ( da 6 a 10 )
const randomNumbersArrayA = Math.floor(Math.random() * 10 + 1);

// numero random per comporre il numero di elementi del mio array B ( da 1 a 5 )
const randomNumbersArrayB = Math.floor(Math.random() * 3 + 1);


// ciclo per creare elementi e inserirli nell'array A
for (let i = 0; i < randomNumbersArrayA; i++) {
    // n random da 1 a 100
    const randomNumersA = Math.floor(Math.random() * 100 + 1);
    // inseriamo nell'array B
    arrayA.push(randomNumersA);
}
console.log(arrayA);


// ciclo per creare elementi e inserirli nell'array B
for (let i = 0; i < randomNumbersArrayB; i++) {
    // n random da 1 a 100
    const randomNumersB = Math.floor(Math.random() * 100 + 1);
    // inseriamo nell'array B
    arrayB.push(randomNumersB);
}
console.log(arrayB);


// prendere l'array con elementi minore e aggiungere elementi fino a quando non avra lo stesso n di elemnti dell'altro array

// differenza tra i due array
let difference;

// SE la lunghezza degli elementi dell'arrayA è minore dell'arrayB
if (arrayA.length < arrayB.length) {
    // lunghezza arrayB meno lunghezza arrayA
    difference = arrayB.length - arrayA.length
    // aggiungo all'arrayA elemnti fino a quando non saranno quanti gli elemnti dell'arrayB
    for (let i = 0; i < difference; i++) {
        const addNumbersArrayA = Math.floor(Math.random() * 100 + 1);
        //    aggiungo il numero creato all'arrayA
        arrayA.push(addNumbersArrayA);
    }
    console.log(arrayA, "arrayA aggiornato");
}
// ALTRIMENTI SE 
else if (arrayB.length < arrayA.length) {
    // lunghezza arrayA meno lunghezza arrayB
    difference = arrayA.length - arrayB.length
    // aggiungo all'arrayB elemnti fino a quando non saranno quanti gli elemnti dell'arrayA
    for (let i = 0; i < difference; i++) {
        const addNumbersArrayB = Math.floor(Math.random() * 100 + 1);
        //    aggiungo il numero creato all'arrayA
        arrayB.push(addNumbersArrayB);
    }
    console.log(arrayB, "arrayB aggiornato");
}
// ALTRIMENTI
else {
    console.log("numero di elemnti corrispettivo in entrambi gli array")
}
