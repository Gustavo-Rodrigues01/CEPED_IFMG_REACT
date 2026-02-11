//uso do objeto Event
const botao = document.getElementById("Botao");

botao.addEventListener("click",function(event){
    console.log("tipo do evento:", event.type);
    console.log("Elemento alvo:", event.target);
    console.log("Elemento atual:", event.currentTarget);
    console.log("timesTamp:", event.timeStamp);
});

