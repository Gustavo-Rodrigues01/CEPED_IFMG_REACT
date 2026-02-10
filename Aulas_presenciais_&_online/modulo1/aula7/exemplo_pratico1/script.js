let counter = 0;
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

botao.addEventListener("click",function(){
    counter++;
    resultado.textContent = counter;

});