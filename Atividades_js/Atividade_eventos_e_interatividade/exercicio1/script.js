const novaTarefa = document.getElementById("novaTarefa")
const listaTarefas = document.getElementById("listaTarefas")

function adicionar(){
    const palavraTarefa = novaTarefa.value.trim()
    if(palavraTarefa !== ""){
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${palavraTarefa} <span class="remove-btn" onclick="removerTarefa(this)">  X  </span>`;
        listaTarefas.appendChild(itemLista);
        novaTarefa.value = "";
    }
    else{
        alert("informe uma tarefa valida!");
    }
}
function removerTarefa(taskElement) {
    taskElement.parentElement.remove();
}