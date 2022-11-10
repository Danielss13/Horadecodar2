var vezes = 1;
window.alert("Tabuada");
var numero = parseInt(prompt("Escreva o número da tabuada: "));

while (isNaN(numero)) {
    numero = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
}

while (vezes <= 10) {
    document.write(numero + " x " + vezes + " = " + (numero * vezes) + "<br>");
    vezes++;
    console.log(vezes);
} 