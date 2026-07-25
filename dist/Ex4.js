"use strict";
/*
Crie uma interface Usuario com:
● nome: string
● email: string
● Um método exibirInfo() que retorna uma string com os dados do
usuário formatados.
Depois, crie um objeto baseado nessa interface e chame o método para
testar.
*/
const usuario = {
    nome: "João",
    email: "joao@email.com",
    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
};
console.log(usuario.exibirInfo());
