function fatorial(num){
    let fat = 1;
    if(num >= 0){
        for(i = 1; i<=num; i++){
        fat *= i
        };
    }
    else{
        num *= -1
        for(i = 1; i<=num; i++){
            fat *= i
        };
        fat *= -1
    }
    
    console.log(`Resultado do fatorial: ${fat}`)
};
fatorial(-5)