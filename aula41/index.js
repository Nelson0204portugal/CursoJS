//Escreva uma função que recebe 2 numeros e retorne o maior deles
// minha solução
function retornaMaiorNumero(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}
console.log(retornaMaiorNumero(30,20));

function max (x,y){
    if(x > y) return x;
    return y;
}

function maximo (x,y){
    return x > y ? x : y;
}
 console.log(maximo(10,20));

 // arrow function

 const max2 = (x,y) => {
     return x > y ? x : y;
 }
 console.log('####');
 console.log(100, 200);

 const max3 = (x ,y) => x > y ? x : y;

 console.log(max3(50, 70));
