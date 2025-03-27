function contarLetra() {
    let texto = document.getElementById('texto').value;
    let letra = document.getElementById('letra').value;

    if (letra.length !== 1) {
        document.getElementById('resultado').innerText = 'Por favor, insira apenas uma letra.';
        return;
    }

    let contagem = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === letra.toLowerCase()) {
            contagem++;
        }
    }

    document.getElementById('resultado').innerText = 'A letra "' + letra + '" aparece ' + contagem + ' vez(es) na string.';
}