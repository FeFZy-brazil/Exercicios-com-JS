function mostrarNome() {
    let nome = document.getElementById("nome").value;
    
    document.getElementById("mensagem").innerText =
        "Bem-vindo, " + nome + "!";
}

const botaoVoltar = document.getElementById("botao-voltar");

function voltarPagina() {
  window.history.back();
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", voltarPagina);
}