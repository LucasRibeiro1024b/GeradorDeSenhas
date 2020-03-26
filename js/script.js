var button = document.querySelector("#enviar");
button.addEventListener("click", function () {
  var tamanho = getEntrada();
  var p = document.querySelector(".senha");

  p.textContent = password(tamanho);
});


function getEntrada() {
  var entrada = document.querySelector("#entrada");

  var num = entrada.value;

  return num;
}

function password(size) {
  var string = "";

  for (var i = 0; i < size; ++i) {
    var code = getRandomASCIINumber();
    var char = String.fromCharCode(code);
    string += char;
  }

  return string;
}

function getRandomASCIINumber() {
  return (Math.random() * 126 + 32);
}
