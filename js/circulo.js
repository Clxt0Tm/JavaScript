function calculoCirculo(){
    let numero = parseFloat(document.getElementById('numero').value);

    let area = 3.14 * (numero * numero);

    document.getElementById('resultado').textContent = 'Resultado do cálculo da área: ' + area;
} 