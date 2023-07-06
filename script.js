var red = document.getElementsByClassName('nao-lido');
var bg = document.getElementsByClassName('caixa-bg');

function marcarLido() {
    for (c = 0; c <= 3; c++) {
        red[c].style.display = 'none';
        bg[c].style.backgroundColor = 'transparent';
        document.getElementById("numero").innerHTML = "0";
    }
}



