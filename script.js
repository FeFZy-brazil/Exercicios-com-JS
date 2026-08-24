const minhasPastas = [
    "Exercício 001",
    "Exercício 002",
    "Exercício 003",
    "Exercício 004",
    "Exercício 005",
    "Exercício 006",
    "Exercício 007",
    "Exercício 008",
    "Exercício 009",
    "Exercício 010",
    "Exercício 011",
    "Exercício 012",
    "Exercício 013",
    "Exercício 014",
    "Exercício 015",
    "Exercício 016",
    "Exercício 017",
    "Exercício 018",
    "Exercício 019",
    "Exercício 020"
];

const container = document.getElementById("gradeDePastas");

minhasPastas.forEach((nomeDaPasta) => {
    const link = document.createElement("a");
    link.className = "pasta-card";

    link.href = `./${nomeDaPasta}/index.html`;

    const icone = document.createElement("i");
    icone.className = "fa-solid fa-folder";

    const texto = document.createElement("span");
    texto.innerText = nomeDaPasta.replace(/-/g, " ");

    link.appendChild(icone);
    link.appendChild(texto);

    container.appendChild(link);
});
