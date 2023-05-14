const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoAlterarTema = document.querySelector(".imagem-botao");

function trocarTema() {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    
    body.classList.toggle("modo-escuro")

    if(modoEscuroAtivo) {
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/sun.png");
    } else {
        imagemBotaoAlterarTema.setAttribute("src", "./src/images/moon.png");
    }
};