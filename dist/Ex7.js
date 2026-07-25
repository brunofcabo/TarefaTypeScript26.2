"use strict";
/*
Crie uma interface genérica chamada RespostaAPI<T> com duas
propriedades:
● dados: T
● sucesso: boolean
Depois, crie dois objetos usando essa interface:
● Um com dados do tipo string
● Outro com dados do tipo number[]
*/
const resposta1 = {
    dados: "OK",
    sucesso: true
};
const resposta2 = {
    dados: [1, 2, 3],
    sucesso: false
};
console.log(resposta1);
console.log(resposta2);
