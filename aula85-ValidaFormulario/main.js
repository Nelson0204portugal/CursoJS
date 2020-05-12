class ValidaFormulario{
    constructor(){
        this.fomrulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.fomrulario.addEventListener('submit', e =>{
          //this em arrow function nao altera depois de criada
          //o this aqui é referente a instancia . valida  
          this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        ///travar o formulario
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();
        if(camposValidos && senhasValidas){
            alert('formulário enviado');
            this.fomrulario.submit();
        }
    }
    senhasValidas(){
        let valid = true;

        const senha = this.fomrulario.querySelector('.senha');
        const repetirSenha = this.fomrulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value){
            valid = false;
            this.createErro(senha,'Campos senha e repetir senha precisam ser iguais.');
            this.createErro(repetirSenha,'Campos senha e repetir senha precisam ser iguais.');
        }
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.createErro(senha,'Precisa estar entre 6 e 12 caracteres');
        }
        return valid;
    }
    camposValidos(){
        let valid = true;

        for(let errorText of this.fomrulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.fomrulario.querySelectorAll('.validar')){
            
            if(!campo.value) {
                const label = campo.previousElementSibling.innerText;
                this.createErro(campo,`Campo ${label} não pode estar em branco.`);
                valid = false;
            }
            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }
    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12){
            this.createErro(campo,'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createErro(campo,'Nome de Usuário precisa conter apenas e/ou números.');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);
        if(!cpf.valida()){
            this.createErro(campo,'CPF inválido');
            return false;
        }
        return true;
    }

    createErro(campo,msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }
    
    
}

const valida = new ValidaFormulario();