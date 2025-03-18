function calculoIMC(){
    
    let num1 = parseFloat(document.getElementById('peso').value);
    let num2 = parseFloat(document.getElementById('altura').value);

    let imc = num1 / (num2 * num2);

    document.getElementById('resultado').textContent = 'O resultado do cálculo de IMC será de: ' + imc;
}