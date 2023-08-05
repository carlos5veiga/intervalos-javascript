let acertos = 0;
let erros = 0;
let fundamental = 0;
let sentido = 0;
let natureza = 0;
let intervalo = 0;

createNewInterval();

function acerto() {
    acertos++;
    document.getElementById("acertos").innerText = acertos;
}

function erro() {
    erros++;
    document.getElementById("erros").innerText = erros;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createNewInterval() {

    fundamental = randomNumber(5, 30);
    sentido = randomNumber(1, 2);
    natureza = randomNumber(1, 2);
    intervalo = fundamental;

    let nota1 = document.getElementById("nota1");
    nota1.src = "./notas/" + fundamental + ".mp3";
    nota1.load();

    if (sentido === 1) {
        intervalo -= natureza;
    } else {
        intervalo += natureza;
    }

    let nota2 = document.getElementById("nota2");
    nota2.src = "./notas/" + intervalo + ".mp3";
    nota2.load();
}

function play() {
    document.getElementById("nota1").play();
    setTimeout(() => {document.getElementById("nota2").play();}, 1500)
}

function verificaResposta(resposta) {
    if (resposta === natureza) {
        acerto();
    } else {
        erro();
    }
}

document.getElementById("maior").onclick = function () {
    verificaResposta(2);
    createNewInterval();
    play();
}

document.getElementById("menor").onclick = function () {
    verificaResposta(1);
    createNewInterval();
    play();
}

document.getElementById("play").onclick = play;