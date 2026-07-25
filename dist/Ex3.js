"use strict";
/*
Crie uma interface chamada Livro com os seguintes campos: titulo,
autor, anoPublicacao.
Depois, escreva uma função resumirLivro que recebe um objeto do tipo
Livro e retorna uma string como:
*/
function resumirLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}
const meuLivro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899
};
console.log(resumirLivro(meuLivro));
