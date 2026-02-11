class Motor {
#tipo;
constructor(tipo){
     this.#tipo = tipo; 
    }
    get nome(){return this.#tipo}
    ligar(){console.log("Motor ligado!");}
};
class Carro {
    #modelo; #motor;
    constructor(modelo, tipoMotor) {
        this.#modelo = modelo;
        this.#motor = new Motor(tipoMotor);
    };
    get modelo(){return this.#modelo}
    ligarCarro() { this.#motor.ligar(); }
};
