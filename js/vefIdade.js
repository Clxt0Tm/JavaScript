function vefIdade(){

    let text = parseFloat(document.getElementById('nome').value);
    let num1 = parseFloat(document.getElementById('idade').value);

    if (idade < 1) {
        document.getElementById('resultado').textContent = 'Bebê 👶';
    } else if (idade >= 1 && idade <= 12) {
        document.getElementById('resultado').textContent = 'Criança 🧒';
    } else if (idade >= 13 && idade <= 17) {
        document.getElementById('resultado').textContent = 'Adolescente 👦👧';
    } else if (idade >= 18 && idade <= 59) {
        document.getElementById('resultado').textContent = 'Adulto 🧑';
    } else if (idade >= 60) {
        document.getElementById('resultado').textContent = 'Melhor Idade 👴👵';
    }
}