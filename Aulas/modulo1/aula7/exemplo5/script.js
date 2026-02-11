document.getElementById("cadastroForm").addEventListener("submit", function(event){
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    let valido = true;

    document.querySelectorAll(".error-message").forEach(el =>{
        el.computedStyleMap.display = "nome";
    });

    if(nome.trim()===""){
        document.getElementById("nomeErro").style.display = "block";
        valido = false;
    };

    if(!email.includes("@") || !email.includes(".")){
        document.getElementById("emailErro").style.display = "block";
        valido = false;
    };

    if(!valido){
        event.preventDefault();
    }
    else{
        alert("cadastro realizado com sucesso");
    };
});