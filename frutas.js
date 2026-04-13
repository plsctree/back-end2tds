//Lista ordenada de valores
const frutas = ["Maçã", "Banana", "Uva", "Mirtilo"];
//Indice =        0        1         2      4

console.log(frutas[0]);
console.log(frutas[4]);
//console.log(frutas.length); //Faz a contagem dos elementos dentro do array

frutas[1] = "Morango";
console.log(frutas);

frutas.push("Pêssego");
frutas.unshift("Abacate");
console.log(frutas);
console.log(frutas.length);

frutas[4] = "MIrtilo";
frutas.unshift(frutas);