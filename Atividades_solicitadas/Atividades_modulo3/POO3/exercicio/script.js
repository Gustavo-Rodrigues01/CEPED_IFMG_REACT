// Parte 1
class Animal {
    #nome;
    #numeroPatas;

    constructor(nome, numeroPatas) {
        this.#nome = nome;
        this.#numeroPatas = numeroPatas;
    }

    nome() {
        console.log(this.#nome);
    }

    emitirSom() {
        console.log("Som genérico");
    }
}

class Especie extends Animal {
    #som;

    constructor(nome, numeroPatas, som) {
        super(nome, numeroPatas);
        this.#som = som;
    }

    emitirSom() {
        console.log(this.#som);
    }
}

// Parte 2
let escolha;

let cachorro = [];
let gato = [];
let passaro = [];
let novoAnimal = [];

do {
    console.log("-----Menu de Animais-----");
    console.log("1. cadastrar cachorro");
    console.log("2. cadastrar gato");
    console.log("3. cadastrar passaro");
    console.log("4. cadastrar outro animal");
    console.log("5. listar todos os animais");
    console.log("6. emitir som de todos os animais");
    console.log("-1. Encerrar menu");

    escolha = Number(prompt("Informe escolha:"));

    switch (escolha) {
        case 1:
            let nomeC = prompt("Informe o nome do cachorro:");
            cachorro.push(new Especie(nomeC, 4, "Au Au"));
            break;

        case 2:
            let nomeG = prompt("Informe o nome do gato:");
            gato.push(new Especie(nomeG, 4, "Miau"));
            break;

        case 3:
            let nomeP = prompt("Informe o nome do pássaro:");
            passaro.push(new Especie(nomeP, 2, "Piu Piu"));
            break;

        case 4:
            let nomeN = prompt("Informe o animal:");
            let patas = Number(prompt("Informe o número de patas:"));
            let som = prompt("Informe o som:");
            novoAnimal.push(new Especie(nomeN, patas, som));
            break;

        case 5:
            console.log("Cachorros:");
            for (let i = 0; i < cachorro.length; i++) cachorro[i].nome();

            console.log("Gatos:");
            for (let i = 0; i < gato.length; i++) gato[i].nome();

            console.log("Pássaros:");
            for (let i = 0; i < passaro.length; i++) passaro[i].nome();

            console.log("Outros animais:");
            for (let i = 0; i < novoAnimal.length; i++) novoAnimal[i].nome();
            break;

        case 6:
            console.log("Cachorros:");
            for (let i = 0; i < cachorro.length; i++) cachorro[i].emitirSom();

            console.log("Gatos:");
            for (let i = 0; i < gato.length; i++) gato[i].emitirSom();

            console.log("Pássaros:");
            for (let i = 0; i < passaro.length; i++) passaro[i].emitirSom();

            console.log("Outros animais:");
            for (let i = 0; i < novoAnimal.length; i++) novoAnimal[i].emitirSom();
            break;
    }
} while (escolha !== -1);