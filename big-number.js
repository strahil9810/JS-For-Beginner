function bigNumber([number1, number2]){
    let num1 = parseInt(number1);
    let num2 = parseInt(number2);

    if(num1 > num2){
        console.log(`Big number is ${num1}`);
    }
    else{
        console.log(`Big number is ${num2}`);
    }
}
bigNumber([10, 7])