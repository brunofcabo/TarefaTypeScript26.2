"use strict";
/*
Crie um type alias chamado Genero que pode ser "masculino" ou
"feminino". Depois, crie uma interface Pessoa com as propriedades
nome (string), idade (number) e genero (Genero). Por fim, implemente
uma função apresentarPessoa que recebe uma Pessoa e retorna uma
mensagem apresentando-a.
*/
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
const pessoaExemplo = {
    nome: "Maria",
    idade: 30,
    genero: "feminino"
};
console.log(apresentarPessoa(pessoaExemplo));
