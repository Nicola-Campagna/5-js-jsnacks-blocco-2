// x n dispari
let redEl = document.getElementById('text-red');
// x n pari
let greenEl = document.getElementById('text-green');

// array di numeri (vuoto)
const numbers = []
// genero un numero random da 1 a 10 che sarà composto l'array 
const randomNumberArray = Math.floor(Math.random() * 10 + 1);

// ciclo per aggiungere i numeri random nell'array
for (let i = 0; i < randomNumberArray; i++) {
    // genero n random da 1 a 100
    const randomNumbers = Math.floor(Math.random() * 100 + 1);
    // aggiungo il numero all'array
    numbers.push(randomNumbers);
}

console.log(numbers);

// ciclo i numeri dell'array e li stampo nel dom
for (let i = 0; i < numbers.length; i++) {
    // numero corrente
    const currentNumber = numbers[i];
    // SE il numero è pari , sarà verde
    if (currentNumber % 2 == 0) {
        greenEl.append(currentNumber + " ");
    }
    // ALTRIMENTI (dispari) sarà rosso
    else {
        redEl.append(currentNumber + " ");
    }
}