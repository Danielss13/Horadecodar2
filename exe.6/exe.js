var opcao = prompt("Gostaria de calcular a média de um aluno? S/N");
        var aprovados = 0;

while (opcao == "S" || opcao == "s") {
    var nota1 = parseInt(prompt("Insira a primeira nota: "));
    var nota2 = parseInt(prompt("Insira a segunda nota: "));
    var media = (nota1 + nota2) / 2;
    window.alert("A média é: " + media);

    if (media >= 9.5) {
        aprovados++;
    }
    window.alert("A quantidade de alunos aprovados foi: " + aprovados);
    var opcao = prompt("Gostaria de calcular a média de um aluno? S/N");
}
while (opcao == "N" || opcao == "n") {
    window.close;
}
        
       