//Declaração de função
function soma(a,b){
    return a+b;
};

//Expressão de função
const soma1 = function(a,b){
    return a + b;
};

//Arrow Function (ES6+)
const soma2 = (a,b) => a+b;

console.log(`Resultado das funções:`);
console.log(soma(1,2));
console.log(soma1(2,3));
console.log(soma2(3,4));