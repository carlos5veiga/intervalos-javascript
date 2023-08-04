let acertos = 0;
let erros = 0;

function acerto() {
    acertos++;
    document.getElementById("acertos").innerText = acertos;
    document.getElementById("nota1").play();
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
    let fundamental = randomNumber(5, 20);
    console.log("fundamental: " + fundamental);
    let sentido = randomNumber(1, 2);
    console.log("sentido: " + sentido);
    let natureza = randomNumber(1, 2);
    console.log("natureza: " + natureza);

    let nota1 = document.getElementById("nota1");
    nota1.src = "./notas/" + fundamental + ".mp3";
    nota1.load();

    let intervalo = fundamental;

    if (sentido === 1) {
        intervalo -= natureza;
    } else {
        intervalo += natureza;
    }

    let nota2 = document.getElementById("nota2");
    nota2.src = "./notas/" + intervalo + ".mp3";
    nota2.load();

    document.getElementById("nota1").play();
    setTimeout(() => {document.getElementById("nota2").play();}, 1500)
}



document.getElementById("maior").onclick = acerto;
document.getElementById("menor").onclick = erro;
document.getElementById("play").onclick = play;