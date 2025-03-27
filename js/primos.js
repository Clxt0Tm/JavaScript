function verificarPrimo() {
    let numero = document.getElementById('numero').value;
    let resultado = document.getElementById('resultado');

    if (numero < 2) {
        resultado.innerText = 'O número deve ser maior ou igual a 2.';
        return;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            resultado.innerText = 'O número ' + numero + ' não é primo.';
            return;
        }
    }
    resultado.innerText = 'O número ' + numero + ' é primo!';
}