function calcularMedia() {
    let input = document.getElementById('numeros').value;

    let numeros = input.split(',').map(function(item) {
        return parseFloat(item.trim());
    });

    if (numeros.some(isNaN)) {
        document.getElementById('resultado').innerText = 'Por favor, insira apenas números válidos.';
        return;
    }

    let soma = numeros.reduce(function(acumulado, valorAtual) {
        return acumulado + valorAtual;
    }, 0);

    let media = soma / numeros.length;

    document.getElementById('resultado').innerText = 'A média é: ' + media;
}
