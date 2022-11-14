const c_nome = document.querySelector("#nome");
const c_data = document.querySelector("#data");
const c_hora = document.querySelector("#hora");
const c_endereco = document.querySelector("#endereco");
const c_tipo_alimento = document.querySelector("#tipo_alimento");
const c_quantidade = document.querySelector("#quantidade");




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

c_nome.innerText = "Nome: " + nome;
c_data.innerText = "Data: " + data;
c_hora.innerText = "Hora: " + hora;
c_endereco.innerText = "Endereço: " + endereco_rua + ", " + endereco_numero;
c_tipo_alimento.innerText = "Tipo de alimento: " + tipo_alimento;
c_quantidade.innerText = "Peso aproximado: " + peso;

//msgDinamica.innerText = nome + ", agendamento realizado no dia " + data + " às " + hora + " no endereço: " + endereco_rua + ", " + endereco_numero + ". Tenha certeza que sua doação de " + tipo_alimento + " fará uma ou mais familias felizes. Entraremos em contato no celular " + celular + " no dia da coleta" 