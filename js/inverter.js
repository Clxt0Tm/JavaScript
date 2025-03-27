function inverterString() {
    // Obtém o valor do campo de entrada
    let texto = document.getElementById('texto').value;

    // Inverte a string usando o método split(), reverse() e join()
    let textoInvertido = texto.split('').reverse().join('');

    // Exibe o resultado na tela
    document.getElementById('resultado').innerText = textoInvertido;
}