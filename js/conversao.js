function celsiusFahrenheit() {
    
  let temperaturaCelsius = parseFloat(document.getElementById('temp').value);

  let conversao = (temperaturaCelsius * 9/5) + 32;
  document.getElementById('resultado').textContent = 'O resultado da conversão é: ' + conversao;
}