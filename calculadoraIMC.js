function calculadoraIMC(){


let altura = document.getElementById('altura').value / 100;
let peso = document.getElementById('peso').value;

let IMC = peso / (altura * altura);
let imc_arredondado = IMC.toFixed(2);

document.getElementById("resultado").textContent ="IMC" + imc_arredondado; 

document.getElementById("AbaixoDoPeso").classList.remove("ativo");
document.getElementById("PesoNormal").classList.remove("ativo");
document.getElementById("AcimaDoPeso").classList.remove("ativo");

document.querySelectorAll("#tabela-imc tr").forEach(tr => tr.classList.remove("ativo"));

if (IMC < 18.5) {
  document.getElementById("AbaixoDoPeso").classList.add("ativo");
  document.getElementById("linha-abaixo").classList.add("ativo");
} else if (IMC < 25) {
  document.getElementById("PesoNormal").classList.add("ativo");
  document.getElementById("linha-normal").classList.add("ativo");
} else if (IMC < 30) {
  document.getElementById("AcimaDoPeso").classList.add("ativo");
  document.getElementById("linha-sobrepeso").classList.add("ativo");
} else if (IMC < 35) {
  document.getElementById("AcimaDoPeso").classList.add("ativo");
  document.getElementById("linha-obesidade1").classList.add("ativo");
} else if (IMC < 40) {
  document.getElementById("AcimaDoPeso").classList.add("ativo");
  document.getElementById("linha-obesidade2").classList.add("ativo");
} else {
  document.getElementById("AcimaDoPeso").classList.add("ativo");
  document.getElementById("linha-obesidade3").classList.add("ativo");
}


}