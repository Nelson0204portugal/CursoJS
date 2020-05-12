function Calculadora(){
        this.display= document.querySelector('.display');
        this.inicia =()=>{
            this.cliqueBotoes();
            this.pressionaEnter();
        };
//se usar arrow function vou ter o this travado em quem criou o elemento ou funciton
        this.cliqueBotoes = () =>{
            document.addEventListener('click',(e) =>{
                const el = e.target;
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
                this.display.focus();
            }/*.bind(this)*/);
        };
        this.btnParaDisplay = (valor)=>{
            this.display.value += valor;
        };
        this.clearDisplay= () => {
            this.display.value = '';
        };
        this.apagaUm= ()=> {
            //pego o valor do input e atribuo o valor que está no input menos um
            //slice é o tamanho da string
            this.display.value = this.display.value.slice(0,-1);
        };
        this.realizaConta= ()=> {
            let conta = this.display.value;
            try{
                conta = eval(conta);
                if(!conta){
                    alert('Conta inválida');
                    return;
                }
                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!!');
                return;
            }
        };
        this.pressionaEnter= () => {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        };
    };

const calculadora = new Calculadora();
calculadora.inicia();