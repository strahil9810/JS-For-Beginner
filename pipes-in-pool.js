function poolPipes([litri, pipes1, pipes2, worker]){
    let pool = parseInt(litri);
    let P1 = parseInt(pipes1);
    let P2 = parseInt(pipes2);
    let hour = parseFloat(worker);

    P1 = hour * P1;
    P2 = hour * P2;
    
    let water = P1 + P2;
    if(water > pool){
        let overFlow = water - pool;
        console.log(`For ${hour} hours the pool overflows with ${overFlow} liters.`);
    }
    else{
        let overFlow = pool - water;
        let waterPipes1 = (P1 / water) * 100;
        let waterPipes2 = (P2 / water) * 100;
        let allWater = (water / pool) * 100;
        console.log(`The pool is ${Math.trunc(allWater)}% full. Pipe 1: ${parseInt(waterPipes1)}%. Pipe 2: ${parseInt(waterPipes2)}%.`);
    }
}
poolPipes([100, 100, 100, 2.5])