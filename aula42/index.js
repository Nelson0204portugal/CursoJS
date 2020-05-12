//Escreva uma função chamada ePaisafem que recebe dois argumento, largura e altura de uma imagem(number).
//Retorne true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura){
    if(largura > altura){
        return true;
    }
    return false;
}

const paisagem = ePaisagem(5,3);
console.log(`é paisagem ${paisagem}`);


const paisagemOk = (largura, altura) => largura > altura ? true : false;

console.log(paisagemOk(10,20));