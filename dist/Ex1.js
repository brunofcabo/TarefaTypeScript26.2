"use strict";
/*
Crie uma variável total com o valor 100. Depois, crie uma função
adicionar que receba dois parâmetros e retorne a soma deles. Não use
anotações explícitas de tipo. Deixe que o TypeScript faça a inferência
automaticamente.
*/
const total = 100;
function adicionar(a, b) {
    return a + b;
}
const resultado = adicionar(20, 30);
console.log(`Total inicial: ${total}`);
console.log(`Resultado da soma: ${resultado}`);
