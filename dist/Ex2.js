"use strict";
/*
Defina um type alias chamado StatusRequisicao que pode ser "sucesso",
"erro" ou "carregando". Em seguida, implemente uma função
mostrarMensagemStatus que recebe um parâmetro desse tipo e
retorna uma mensagem correspondente.
*/
function mostrarMensagemStatus(status) {
    if (status === "carregando") {
        return "Aguarde... carregando dados.";
    }
    else if (status === "sucesso") {
        return "Operação realizada com sucesso!";
    }
    else {
        return "Ocorreu um erro ao processar a requisição.";
    }
}
console.log(mostrarMensagemStatus("carregando"));
