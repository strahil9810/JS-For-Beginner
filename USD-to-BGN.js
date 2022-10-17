function convert(USD){
    let dollar = parseFloat(USD);
    let leva = (dollar * 1.79549).toFixed(2);
    console.log(`${dollar} USD = ${leva} BGN`);
}
convert(12.5)