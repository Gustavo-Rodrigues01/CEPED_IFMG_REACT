//forma não recomendada
function mostrarAlerta(){
    alert("Botão foi clicado!");
};
//forma antiga
document.getElementById("meuBotao").onclick = function(){
    alert("Botão foi clicado!");
};

//forma moderna
const botao = document.getElementById("Botao");

botao.addEventListener("click", function(){
    alert("primeiro handler");
});
botao.addEventListener("click", function(){
    console.log("segundo handler")
})