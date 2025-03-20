function calcular(operacao) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let resultado;
    if (operacao === '+') resultado = num1 + num2;
    else if (operacao === '-') resultado = num1 - num2;
    else if (operacao === '*') resultado = num1 * num2;
    else if (operacao === '/') resultado = num1 / num2;
    document.getElementById("resultadoCalc").textContent = "Resultado: " + resultado;
}
