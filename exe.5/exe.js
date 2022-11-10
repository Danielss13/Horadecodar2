let total = 0;
let valor = parseInt(prompt("Escreva o primeiro valor: "));
let numero1 = parseInt(prompt("Escreva o segundo valor: "));
let numero2 = numero1 - valor +1;

while (valor <= numero1) {
    console.log(total);
    document.write("Valor: " + valor + "<br>");
    total = valor + total;
    valor++;
}  


document.write("<br>" + "Valor total: " + total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) + "<br><br>");
document.write("Intervalo de números: " + numero2 + "<br><br>");
document.write("Média aritmética: " + total/numero2);