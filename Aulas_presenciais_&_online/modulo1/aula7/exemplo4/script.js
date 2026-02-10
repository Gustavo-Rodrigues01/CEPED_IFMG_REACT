//detecção da tecla enter
const input = document.getElementById("meuInput");
const resultado = document.getElementById("resultado");

input.addEventListener("keydown", function(event){
    if(event.key === "Enter"){
        let texto = this.value;
        if(texto.length <= 50){
            let counter= 0;
            counter = texto.length;
            resultado.textContent = counter;
        }
        else{
            alert("Mais de 50 caracteres!")
        }
    }   
});