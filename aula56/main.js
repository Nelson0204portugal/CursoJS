function criaPessoa(nome,sobrenome,altura,peso){
    return{
        nome,
        sobrenome,
        //Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            //retorna um array com o nome separado
            valor = valor.split(' ');
            //shift, retorna o primeiro indice e exclui do array
            this.nome = valor.shift();
            //join acrescenta espaça a cada indice do array
            this.sobrenome = valor.join(' ');

        },

        fala(assunto){
            return `${nome} ${sobrenome} está ${assunto}.`;
        },
        altura,
        peso,
        //Getter
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
    };
}
const p1 = criaPessoa('Nelson','Duarte',1.7,75);
p1.nomeCompleto = 'liliana martins';
console.log(p1.nomeCompleto);

