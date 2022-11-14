const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const celular = document.querySelector("#celular");
const endereco_rua = document.querySelector("#endereco_rua");
const endereco_numero = document.querySelector("#endereco_numero");
const endereco_complemento = document.querySelector("#endereco_complemento");
const tipo_alimento = document.querySelector("#tipo_alimento");
const peso = document.querySelector("#peso");
const data = document.querySelector("#data");
const hora = document.querySelector("#hora");
const sucess = document.querySelector("#sucess");
const errorNodes = document.querySelectorAll(".error");


function validarForm(){
    validarNome(nome.value);
    validarEmail(email.value);
    validarCelular(celular.value);
    validarRua(endereco_rua.value);
    validarNumero(endereco_numero.value);

}


function validarNome(inputNome){
    if(!inputNome){
        errorNodes[0].innerText = "Nome não pode ser vazio";
        nome.classList.add("error-border");
    }else{
        errorNodes[0].innerText = "";
        nome.classList.remove("error-border");
    }
}

function validarEmail(inputEmail){
    if(!inputEmail){
        errorNodes[1].innerText = "E-mail não pode ser vazio";
        email.classList.add("error-border");
    }else{
        errorNodes[1].innerText = "";
        email.classList.remove("error-border");
        regexEmail(inputEmail);
    }
}

function regexEmail(inputEmail){
    let regex =  /\S+@\S+\.\S+/  //professor, é uma validação simples. Mas para esta tarefa, acredito ser suficiente :D
    if(regex.test(inputEmail)){
        errorNodes[1].innerText = "";
        email.classList.remove("error-border");
    }else{
        errorNodes[1].innerText = "E-mail em formato inválido";
        email.classList.add("error-border");
    }
}


function validarCelular(inputCelular){
    if(!inputCelular){
        errorNodes[2].innerText = "Celular não pode ser vazio";
        celular.classList.add("error-border");
    }else{
        errorNodes[2].innerText = "";
        celular.classList.remove("error-border");
        validarCampoCelular(inputCelular);
    }
}

function validarCampoCelular(inputCelular){
    if(inputCelular.length < 11){
        errorNodes[2].innerText = "Formato errado, siga o exemplo: 11912345678";
        celular.classList.add("error-border");
    }else{
        errorNodes[2].innerText = "";
        celular.classList.remove("error-border");
    }
}

function validarRua(inputRua){
    if(!inputRua){
        errorNodes[3].innerText = "Rua não pode ser vazio";
        endereco_rua.classList.add("error-border");
    }else{
        errorNodes[3].innerText = "";
        endereco_rua.classList.remove("error-border");
    }
}

function validarNumero(inputNumero){
    if(inputNumero == null){
        errorNodes[4].innerText = "Número não pode ser vazio";
        //endereco_numero.classList.add("error-border");
    }else{
        errorNodes[4].innerText = "";
        endereco_numero.classList.remove("error-border");
    }
}