let acertos = 0;
let erros = 0;

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

function play() {
    let fundamental = randomNumber(1, 9);
    console.log("fundamental: " + fundamental);
    let sentido = randomNumber(1, 2);
    console.log("sentido: " + sentido);
    let natureza = randomNumber(1, 2);
    console.log("natureza: " + natureza);
}



document.getElementById("maior").onclick = acerto;
document.getElementById("menor").onclick = erro;
document.getElementById("play").onclick = play;