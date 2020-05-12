//lazzy avaluation
//bom para performance dependendo do uso

//é preciso usar o * em function
function* geradora1(){
    //yield similar ao return
    //sempre que chamar o next no objeto retornado
    yield ' valor 1';
    yield ' valor 2';
    yield ' valor 3';
}
const g1 = geradora1();
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next().value);
// console.log(g1.next());
// //retorna duas chaves - value e done (se for false tenho mais valores e true acabou os valores)

// for (let valor of g1){
//     console.log(valor);
// }

//gerador infinito

function* contador(){
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}

// const cont = contador();
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);
// console.log(cont.next().value);

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}
function* geradora4(){
    //* para chamar função
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function* geradora5(){
    yield function(){
        console.log('vim do yield 1');
    }
    //...
    yield function(){
        console.log('vim do yield 2');
    }

}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();