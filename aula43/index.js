// Escreva uma função que recebe um número e
// retorne o seguinte:
//Numero é divisivel por 3 = Fizz
//Numero é divisivel por 5 = Buzz
//Numero é divisivel por 3 ou 5 = FizzBuzz
//Numero nao é divisivel por 3 ou 5 = numero
//Checar se o numero é realmente um numero
//Use a função com numeros de 0 a 100

function fizzBuzz(n){
    if(typeof n !== 'number') return n;
    if(n % 3 == 0 && n % 5 == 0) return 'FizzBuzz';
    if(n % 3 === 0) return 'Fizz';
    if(n % 5 === 0) return 'Buzz';
    return n;
}

for (let i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i));
}
