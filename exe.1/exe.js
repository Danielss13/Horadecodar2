let valor1 = Number(prompt('Digite o primeiro valor'));

let valor2 = Number(prompt('Digite o segundo valor'));

while (valor2 <= 0){

    valor2 = Number(prompt('Digite o segundo valor'));
}

let res = valor1 / valor2; 

if (valor2 > 0){

    alert (`${valor1} / ${valor2} é = ${res}`);
}