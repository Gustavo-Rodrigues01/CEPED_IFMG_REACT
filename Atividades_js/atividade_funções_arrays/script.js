//VARIAVEIS GLOBAIS
let listaCarros = new Array()
let escolha
let contador = 0
do{
    //MENU ESCOLHA DE FUNÇÃO
    console.log("----------MENU DE SELEÇÃO----------")
    console.log("(1)Adicionar item ")
    console.log("(2)Mostrar itens")
    console.log("(3)Alterar item")
    console.log("(4)Excluir item")
    console.log("(-1)Sair")
    escolha = Number(prompt("informe a escolha do usuario de acordo com o console: "))

    //ESCOLHA DE FUNÇÃO
    switch(escolha){
        case 1:
            AdicionarItem()
            break
        case 2:
            MostrarItens()
            break
        case 3:
            AtualizaItens()
            break
        case 4:
            RemoverItem()
            break
        case -1:
            console.log("saindo...")
            break
        default:
            console.log("Esta opção não existe neste menu!")
    }
}while(escolha != -1)

//FUNÇÃO QUE ADICIONA ITENS
function AdicionarItem(){
    let novoItem = (prompt("Informe o nome do item a ser adicionado:"))
    listaCarros.push(novoItem)
    contador++
}

//FUNÇÃO QUE MOSTRA ITENS
function MostrarItens(){
    for(let i = 0;i < contador; i++){
        console.log(listaCarros[i])
    }
}

//FUNÇÃO QUE ATUALIZA ITENS
function AtualizaItens(){
    let posição = Number(prompt(`qual posição vc deseja atualizar de 0 a ${contador-1}: ` ))
    if(posição < 0 || posição > contador){
        console.log("a posição informada é invalida ou esta vazia! tente novamente")
    }
    else{
        let novoConteudo = prompt("informe o novo item: ")
        listaCarros[posição] = novoConteudo
    }
}

//FUNÇÃO QUE REMOVE ITENS
function RemoverItem(){
    do{
        let i = Number(prompt(`Informe a posição do item a ser removido a partir de (1) a ${contador}: `))
        if(i < 0 || i >= contador){
            console.log("posição invalida! tente novamente!")
        }
        else{
        const removido = listaCarros.splice(i-1,1)
        contador -= 1
        }
    }while(loop = 0)
}