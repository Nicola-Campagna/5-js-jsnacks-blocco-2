// array di numeri interi (vuoto - da riempire)
const myNumbersArray = [];
// numero random da 1 a 10 per decidere da quanti elementi sarà costituito il mio array
const randomNumber = Math.floor(Math.random() * 10 + 1);
// ciclo in base al numero random di prima i numeri che saranno gli elementi dell'array, e li aggiungo
for (let i = 0; i < randomNumber; i++) {
    // n random da 1 a 100
    const randomNumbersArray = Math.floor(Math.random() * 100 + 1);
    // aggiungo i numeri random all'array
    myNumbersArray.push(randomNumbersArray);
}

console.log(myNumbersArray);


let somma = 0;
// se l'indice dell'elemento dell'array è dispari somma quel numero insieme ai numeri di altre posizioni dispari
for (let i = 0; i < myNumbersArray.length; i + 2) {
    const currentElement = myNumbersArray[i];
    if (i % 2 !== 0) {
        somma += currentElement;
        console.log("somma numeri in posizione dispari: " + somma)
    }
}

