//Calculadora de imc

let nome = "Jaehyun";
let peso = 85;
let altura = 1.80;

//Função que calcula e retorna o imc
function calcularIMC(peso, altura){
    let imc = peso / (altura * altura)
};

let resultado = calcularIMC(peso, altura)

console.log(`IMC de ${nome}: ${resultado}`);