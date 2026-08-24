function validarCampo() {
    let nome = document.getElementById("nome").value.trim();
    let mensagem = "";
    
    if (nome == "") {
        mensagem = "O campo está vazio.";
    } else if (nome.length < 3) {
        mensagem = "Digite pelo menos 3 caracteres.";
    } else {
     mensagem = "Campo preenchido corretamente!";
    }
    
    document.getElementById("mensagem").innerText = 
        "Mensagem: " + mensagem;
}

const botaoVoltar = document.getElementById("botao-voltar");

function voltarPagina() {
  window.history.back();
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", voltarPagina);
}