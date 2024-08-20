let vetor = [];

function adicionarValor() {
  const valor = Number(document.getElementById('valor').value);
  vetor.push(valor);

  const tabela = document.getElementById('tabelaValores').getElementsByTagName('tbody')[0];
  const novalinha = tabela.insertRow();
  const celula = novalinha.insertCell();
  celula.textContent = valor;

  document.getElementById('valor').value = '';
    document.getElementById('valor').focus();
}

function primeNumbers() {
  const tabela = document.getElementById("primeNumbers").getElementsByTagName("tbody")[0];


  tabelaPares.innerHTML = ''; // Limpa a tabela antes de adicionar novos valores

  vetor.forEach(valor => {
    if (valor % 2 === 0) {
      const novaLinha = primeNumbers.insertRow();
      const celula = novaLinha.insertCell(0);
      celula.textContent = valor;
    }
  });
}

/* Estilos do formulário */


function primeNumbers(num) {

  let numbers = new Array();
  for (var i = 0; i <= num; i++) {
    if (isPrime(i)){
      numbers.push(i);
    }
  }
  return numbers;
}
function isPrime(num) {
  for(let i = 2; i <num; i++)
    if(num % i === 0) {
        return false
    };
  return num > 1;
}
console.log(primeNumbers( 2,3,5,7,11 ));
