// 🔴 1. Declarar 5 variáveis para representar o cadastro de um aluno
// 🔴 2. Crie duas variáveis númericas e exiba uma soma
// 🔴 3. Calcular a média final. Declarar nota de prova e nota de trabalho. Calcular também a difrença da maior nota e menor
// Fazer uma saída de forma interpolada (´${}´) 

const nomeCompleto = "Luana Coutto";
const idade = 20;
const curso = "Mídias Sociais Digitais";
const matricula = 20052024;
const estaAtivo = false; 
console.log(`--- Ficha do Aluno ---
Nome: ${nomeCompleto}
Idade: ${idade} anos
Curso: ${curso}
Matrícula: ${matricula}
Status: ${estaAtivo ? "Ativo" : "Inativo"}`);

let numero1 = 100;
let numero2 = 27;
let soma = numero1 + numero2;

console.log(`A soma de ${numero1} e ${numero2} é igual a ${soma}`);

let notaProva = 8.5;
let notaTrabalho = 7.0;
let mediaFinal = (notaProva + notaTrabalho) / 2;
let maiorNota = Math.max(notaProva, notaTrabalho);
let menorNota = Math.min(notaProva, notaTrabalho);
let diferenca = maiorNota - menorNota;

console.log(`Nota da Prova: ${notaProva}`);
console.log(`Nota do Trabalho: ${notaTrabalho}`);
console.log("-----------------------");
console.log(`Média Final: ${mediaFinal.toFixed(1)}`);
console.log(`Maior Nota: ${maiorNota}`);
console.log(`Menor Nota: ${menorNota}`);
console.log(`Diferença entre as notas: ${diferenca.toFixed(1)}`);