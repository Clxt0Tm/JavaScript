function imparPar(){
    let n1 = parseFloat(document.getElementById('num1').value);
    if (n1 % 2 == 0) {
        document.getElementById('resultado').textContent = 'Este número é par.';
      } else {
        document.getElementById('resultado').textContent = 'Este número é ímpar.';
      }
}