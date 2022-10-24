function sameNumber([number1, number2, number3]){
    if(number1 === number2 && number1 === number3 && number2 === number3){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}
sameNumber([5, 5, 2])