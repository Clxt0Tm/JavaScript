function vefString() {
    // Obtém o valor do campo de texto
    var str = document.getElementById("inputTexto").value;

    // Verifica se a string está vazia
    if (str.trim() === "") {
      alert("A string está vazia.");
    } else {
      alert("A string não está vazia.");
    }
  }