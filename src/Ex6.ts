/*
Crie uma função genérica chamada retornarElemento<T> que recebe
dois parâmetros:
● Um array de tipo genérico T
● Um número index
A função deve retornar o elemento do array na posição indicada. Teste
a função com um array de strings e um de números.
*/

function retornarElemento<T>(array: T[], index: number): T | undefined {
  return array[index];
}

const numerosArray = [10, 20, 30];
const stringsArray = ["a", "b", "c"];

console.log(retornarElemento(numerosArray, 1));
console.log(retornarElemento(stringsArray, 0));