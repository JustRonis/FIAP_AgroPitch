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


    if(nome.value.length < 1){
        errorNodes[0].innerText = "Nome não pode ser branco";
        nome.classList.add("error-border");
    }else{
        errorNodes[0] = "";
        nome.classList.remove("error-border");
    }

    if(email.value.lenght < 1){
        errorNodes[1].innerText = "Campo obrigatório";
        email.classList.add("error-border");
    }
    
    if(!validarEmail(email.value)){
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

function validarEmail(email){
    if(email.lenght < 1){
        console.log(email)
        return false
    }else{
        return true;
    }
    let regex =  /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if(regex.test(email)){
        return true;
    }else{
        return false
    }
}


function validarCelular(celular){
    if(celular.lenght < 1){
        return false;
    }else{
        return true;
    }

}

function mascaraTelefone(event){
    let input = event.target;
    input.value = mascara(input.value);
}

function mascara(value){
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
}