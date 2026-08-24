function converterFahreinheit() {
    let celsius = Number(document.getElementById("celsius").value);
    
    let fahreinheit = (celsius * 9 / 5) + 32;
    
    document.getElementById("resultado").innerText = 
        "Resultado: " + fahreinheit + " ºF";
}

function converterKelvin() {
    let celsius = Number(document.getElementById("celsius").value);
    
    let kelvin = celsius + 273.15;
    
    document.getElementById("resultado").innerText =
        "Resultado: " + kelvin + " K";
}

function limpar() {
    document.getElementById("celsius").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
}

const botaoVoltar = document.getElementById("botao-voltar");

function voltarPagina() {
  window.history.back();
}

if (botaoVoltar) {
  botaoVoltar.addEventListener("click", voltarPagina);
}