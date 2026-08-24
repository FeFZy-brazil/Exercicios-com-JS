function aumentarTexto() {  
    document.getElementById("mensagem")
    .style.fontSize = "30px";

}

function mudarFonte() {
    document.getElementById("mensagem")
    .style.fontFamily = "Courier New";
}

function negritoTexto() {
    document.getElementById("mensagem")
    .style.fontWeight = "bold";
}

const botaoVoltar = document.getElementById("botao-voltar");

function voltarPagina() {
  window.history.back();
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", voltarPagina);
}