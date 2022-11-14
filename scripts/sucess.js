const msgDinamica = document.querySelector("#msgDinamica");
let nome = localStorage.getItem("nome");
let email = localStorage.getItem("email");
let celular = localStorage.getItem("celular");
let endereco_rua = localStorage.getItem("endereco_rua");
let endereco_numero = localStorage.getItem("endereco_numero");
let endereco_complemento = localStorage.getItem("endereco_complemento ");
let tipo_alimento = localStorage.getItem("tipo_alimento");
let peso = localStorage.getItem("peso");
let data= localStorage.getItem("data");
let hora = localStorage.getItem("hora");



msgDinamica.innerText = nome + " agendamento realizado no dia " + data + " às " + hora + " no endereço: " + endereco_rua + ", " + endereco_numero + " tenha certeza que sua doação de " + tipo_alimento + " fará uma ou mais familias felizes. Entraremos em contato no celular " + celular + " no dia da coleta" 