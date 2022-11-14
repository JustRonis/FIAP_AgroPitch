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
let verificador = false;


function validarForm(){
   
    validarNome(nome.value);
    validarEmail(email.value);
    validarCelular(celular.value);
    validarRua(endereco_rua.value);
    validarNumero(endereco_numero.value);
    validarPeso(peso.value);
    validarData(data.value);
    validarHora(hora.value);
}


function validarNome(inputNome){
    if(!inputNome){
        errorNodes[0].innerText = "Nome não pode ser vazio";
        nome.classList.add("error-border");
        verificador =  false;

        
    }else{
        errorNodes[0].innerText = "";
        nome.classList.remove("error-border");
        verificador = true;

    }
}

function validarEmail(inputEmail){
    if(!inputEmail){
        errorNodes[1].innerText = "E-mail não pode ser vazio";
        email.classList.add("error-border");
        verificador = false;

    }else{
        errorNodes[1].innerText = "";
        email.classList.remove("error-border");
        regexEmail(inputEmail);
        verificador = true;
    }
}

function regexEmail(inputEmail){
    let regex =  /\S+@\S+\.\S+/  //professor, é uma validação simples. Mas para esta tarefa, acredito ser suficiente :D
    if(regex.test(inputEmail)){
        errorNodes[1].innerText = "";
        email.classList.remove("error-border");
        verificador = true;
    }else{
        errorNodes[1].innerText = "E-mail em formato inválido";
        email.classList.add("error-border");
        verificador = false;
    }
}


function validarCelular(inputCelular){
    if(!inputCelular){
        errorNodes[2].innerText = "Celular não pode ser vazio";
        celular.classList.add("error-border");
        verificador = false;

    }else{
        errorNodes[2].innerText = "";
        celular.classList.remove("error-border");
        validarCampoCelular(inputCelular);
        verificador = true;
    }
}

function validarCampoCelular(inputCelular){
    if(inputCelular.length < 11 || inputCelular.length > 11){
        errorNodes[2].innerText = "Formato errado, siga o exemplo: 11912345678";
        celular.classList.add("error-border");
        verificador = false;
    }else{
        errorNodes[2].innerText = "";
        celular.classList.remove("error-border");
        verificador = true;
    }
}

function validarRua(inputRua){
    if(!inputRua){
        errorNodes[3].innerText = "Rua não pode ser vazio";
        endereco_rua.classList.add("error-border");
        verificador =  false;

    }else{
        errorNodes[3].innerText = "";
        endereco_rua.classList.remove("error-border");
        verificador = true;

    }
}

function validarNumero(inputNumero){
    if(!inputNumero){
        errorNodes[4].innerText = "Número não pode ser vazio";
        endereco_numero.classList.add("error-border");
        verificador = false;

    }else{
        errorNodes[4].innerText = "";
        endereco_numero.classList.remove("error-border");
        verificador = true;

    }

}

function validarPeso(inputPeso){
    if(!inputPeso){
        errorNodes[6].innerText = "Peso não pode ser vazio";
        peso.classList.add("error-border");
        verificador = false;

    }else{
        errorNodes[6].innerText = "";
        peso.classList.remove("error-border");
        verificador = true;

    }
}

function validarData(inputData){
    if(!inputData){
        errorNodes[7].innerText = "Data não pode ser vazio";
        data.classList.add("error-border");
        verificador = false;

    }else{
        errorNodes[7].innerText = "";
        data.classList.remove("error-border");
        verificador =  true;

    }
}

function validarHora(inputHora){
    if(!inputHora){
        errorNodes[8].innerText = "Hora não pode ser vazio";
        hora.classList.add("error-border");
        verificador =  false;

    }else{
        errorNodes[8].innerText = "";
        hora.classList.remove("error-border");
        verificador = true;

    }
}

function redirecionar(){
    if(verificador  == true){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("celular", celular.value);
        localStorage.setItem("endereco_rua", endereco_rua.value);
        localStorage.setItem("endereco_numero", endereco_numero.value);
        localStorage.setItem("endereco_complemento", endereco_complemento.value);
        localStorage.setItem("tipo_alimento", tipo_alimento.value);
        localStorage.setItem("peso", peso.value);
        localStorage.setItem("data", data.value);
        localStorage.setItem("hora", hora.value);
        let dados = {nome: nome.value, email: email.value}
        localStorage.setItem(dados, JSON.stringify(dados));
        location.href="../pages/sucess.html"
    }
}