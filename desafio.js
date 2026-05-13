// 🔴Declarar 5 variáveis para representar o cadastro de um aluno
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