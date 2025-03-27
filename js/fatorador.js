function calcularFatorial() {
    let numero = document.getElementById('numero').value;
    let resultado = 1;

    if (numero < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um número não negativo.';
        return;
    }

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    document.getElementById('resultado').innerText = resultado;
}