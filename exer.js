// let arr = [
//     [11,2,4],
//     [4,5,6],
//     [10,8,-12]
// ];

// let diagonal1 = 0
// let diagonal2 = 0
// let row = arr.length;
// let column = arr[0].length;


// let k = 0;
// let l = 1;

// for(let i = 0; i < row; i++){
//     for(let j = 0; j < column; j++){
//         diagonal1 += arr[i][k];
//         k++;
//         break;
//     }
// }

// for(let i = 0; i < row; i++){
//     for(let j = (column - l); j >= 0; j++){
//         diagonal2 += arr[i][j];
//         l++
//         break;
//     }
// }

// let resultado = Math.abs(diagonal1 - diagonal2);
// // console.log(resultado);

// let arr2 = [[-4],[3],[-9],[0],[4],[1]];
// let arr3 = [];
// for(let i = 0; i < 6; i++){
//     for(let j = 0; j< 1; j++){
//         let foraArray = arr2[i][j];
//         arr3.push(foraArray);
//         break;
//     }
// }

// let positivo = arr3.filter(value => Math.sign(value) === 1 )
// let valorPositivo = (positivo.length/6).toFixed(6);

// let negativo = arr3.filter(value => Math.sign(value) === -1 )
// let valorNegativo = (negativo.length/6).toFixed(6);

// let zero = arr3.filter(value => Math.sign(value) === 0 )
// let valorZero = (zero.length/6).toFixed(6);


// console.log(valorPositivo,valorNegativo,valorZero);
function staircase(n) {
    var line = Array(n + 1).fill(' ');
    line[n] = '\n';
 console.log(line[6]);
    // for (var i = n - 1; i >= 0; i--) {
    //     line[i] = '#';
    //     console.log(line);
    // }
}

// let arr = [15 ,12, 33, 25, 4]
// const arrSort = arr.sort((a,b)=> a-b );
// console.log(arrSort)
// var max = arrSort.filter(value => value <Math.max(...arrSort)).reduce((ac,atual)=>{
//     ac += atual;
//     return ac
// },0)
// var min = arrSort.filter(value => value > Math.min(...arrSort)).reduce((ac,atual)=>{
//     ac += atual;
//     return ac
// },0)
// console.log(max);
// console.log(min);

// let arr = [3,2,1,3];
// const velas = arr.filter(value => Math.max(...arr) === value)
// console.log(velas.length);

// let hora = '11:05:45PM';
// let hour = hora.substring(0,2);
// let timeFormat = hora.substring(2, hora.length-2);

// // if midnight
// if(hour === 12 && hora.indexOf('AM') !== -1) console.log(`00 ${timeFormat}`);
// //if afternoon
// if(hour === 12 && hora.indexOf('PM') !== -1) console.log( `${hours} ${timeFormat}`);

// // if hour is from 1 to 11PM, add 12 to the time
// if (hour < 12 && hora.indexOf("PM") !== -1) {
//     console.log(12 + parseInt(hour) + timeFormat);
// } else { // if hour is from 1 to 11 AM
//     if (hour < 10) { // if number is less than 10, add a zero in front
//         console.log("0" + hour + timeFormat);
//     } else { // if number is greater than 9, just add rest of string
//         console.log(hour + timeFormat);
//     }
// }

// const  s = 7;
// const t = 11;
// const a  = 5;
// const b = 15;
// const m = 3;
// const n = 2;
// const maca = [-2,2,1];
// const laranja = [5,-6];

// let resMaca = maca.map(value => value + a ).filter(value => value >= s && value <= t)
// let resLaranja = laranja.map(value => value + b ).filter(value => value >= s && value <= t)

// console.log(resMaca);
// console.log(resLaranja);

/*Kangaroo*/

// let arr = [0,2,5,3];
// let x1 = arr[0];
// let v1 = arr[1];
// let x2 = arr[2];
// let v2 = arr[3];

// function kangaroo(x1, v1, x2, v2) { 
//     var difference=0;
//     var calculate=function()
//     {
//         if((x1<x2)&&((v1<v2)||(v1==v2))){
//             return "NO"
//         }else{
//         while(Math.sign(difference)!=-1)
//         {
//             x1+=v1; 
//             x2+=v2; 
//             difference=x2-x1; 
//                 if(difference==0)
//                  { 
//                      return "YES"
//                  } 
//         } 
//             return "NO" 
//         } 
//     }();
//     return calculate;
// }
// console.log(kangaroo(x1, v1, x2, v2));

/*Breaking records */

// let arr = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
// let contador = 0;
// let contador2 = 0;
// let record = arr[0];
// let lowest = arr[0];
// for (let i = 0 ;i < arr.length;i++){
//     if(record < arr[i]){
//         contador++;
//          record = arr[i];
//     }
//     if(lowest > arr[i]){
//         contador2++;
//          lowest = arr[i];
//     }
// }
// console.log(contador);
// console.log(contador2);




// let countObj = {};
// let arr = 
// arrOftype = [1, 4, 4, 4, 5, 3];
//     let birds = [0, 0, 0, 0, 0, 0];
//     for (let type of arrOftype) {
//         console.log(type + '\n', birds);
//         birds[type]++;
//     }
//      console.log(birds.indexOf(Math.max(...birds))); //Print the index with the highest value


// let contador = 0;
// for(let i = 0 ; i < arr.length; i++){
    
//     for(j=0;j< arr.length;j++){
//         if(arr[i] == arr[j]){
//             ++contador;
//             countObj[arr[i]] = contador;
//         }
//     }
//     contador=0;
// }
// let arrayObjeto = Object.entries(countObj)
// let maior = Object.values(countObj);
// let newArr;
// for (var [keys, value] of Object.entries(countObj)) {
//             if(value === Math.max(...maior)){
//                 newArr = arrayObjeto.push();      
//             }
// }
// console.log(arrayObjeto);

// let index = 1;
// let arr = [3,10,2,9];
// let charged = 12;
// let arrBrian = arr.splice(index,1);
// let valor = arr.reduce((ac,va)=>{
//     let resultado =  ac + va;
//     return resultado;
// });
// if((valor/2) === charged){
//     console.log('bon appetit');
// }else{
//     console.log(charged - (valor/2));
// }

let arr = [10,20,20,10,10,30,50,10,20];
let sorted = arr.sort((a,b) => a-b);
console.log(sorted);
let pairs = 0;


for (let i = 0; i < arr.length - 1;i++){
    if(sorted[i] == sorted[i + 1]){
        pairs++;
        i+=1;
    }
 
}
console.log(pairs);