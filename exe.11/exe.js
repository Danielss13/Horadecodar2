var contagem = 1;
var contagem2 = 0;
var contagem3 = 0;

while (contagem <= 10) {
    var num = parseInt(prompt("Digite um valor: "));
    document.write("Valor " + contagem + ": " + num + "<br>");
    contagem++;
    if (num >= 24 && num <= 42) {
        contagem2++;
    }
    if (num < 24 || num > 42) {
        contagem3++;
    }
}
window.document.write("<br>" + "Quantidade de números entre 24 e 42: " + contagem2 + "<br>");
window.document.write("Quantidade de números fora desse alcance: " + contagem3);