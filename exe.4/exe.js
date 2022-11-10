let valor = 15;
let valor1 = 0;
let valor2 = 100 - valor +1;

while (valor <= 100) {
    console.log(valor1);
    document.write("Valor: " + valor + "<br>");
    valor1 = valor + valor1;
    valor++;
}  


document.write("Valor total: " + valor1 + "<br><br>");
document.write("Intervalo de números: " + valor2 + "<br><br>");
document.write("Média aritmética: " + valor1/valor2);
