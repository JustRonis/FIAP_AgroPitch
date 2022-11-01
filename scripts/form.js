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

    clearMessages();

    if(nome.value.length < 1){
        errorNodes[0].innerText = "Nome não pode ser branco";
        nome.classList.add("error-border");
    }

    if(email.value.lenght < 1){
        errorNodes[1].innerText = "Campo obrigatório";
        email.classList.add("error-border");
    }
    
    if(!validateEmail(email.value)){
        errorNodes[1].innerText = "E-mail inválido";
        email.classList.add("error-border");
    }



    if(!validarCelular(celular.value)){
        errorNodes[2].innerText = "Celular inválido";
        email.classList.add("error-border");
    }
    

    if(endereco_rua.value.length < 1){
        errorNodes[3].innerText = "Campo obrigatório";
        nome.classList.add("error-border");
    }

   
}

function clearMessages(){
    for(let i = 0; i < errorNodes.length, i++;){
        errorNodes[i].innerText = "";
    }
    nome.classList.remove("error-border");
    email.classList.remove("error-border");
}

