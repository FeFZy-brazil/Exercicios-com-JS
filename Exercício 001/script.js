function alterarTexto() { 
    document.getElementById("mensagem").innerText =
        "O texto foi alterado com JavaScript!"
}

const botaoVoltar = document.getElementById("botao-voltar");

function voltarPagina() {
  window.history.back();
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", voltarPagina);
}