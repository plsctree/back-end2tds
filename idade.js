const idade = 17;
const maiorDeIdade = idade >= 18;
const possuiCNH = false;

const podeDirigir = maiorDeIdade && possuiCNH;
console.log ("Pode dirigir ? " + podeDirigir);

const podeViajarSozinho = maiorDeIdade || possuiCNH;
console.log("Pode dirigir ? " + podeViajarSozinho);

//operador not
const precisaDeAcompanhante = !maiorDeIdade;
console.log("Precisa de acompanhante ?" + precisaDeAcompanhante);