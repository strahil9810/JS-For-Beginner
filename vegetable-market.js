function vegetableMarket([vegetableKilogramPrice, fruitKilogramPrice, allVegetableKilogram, allFruitKilogram]){
    let vegetablePrice = parseFloat(vegetableKilogramPrice);
    let fruitPrice = parseFloat(fruitKilogramPrice);
    let vegetableKilogram = parseInt(allVegetableKilogram);
    let fruitKilogram = parseInt(allFruitKilogram);

    let allVegetablePrice = vegetableKilogram * vegetablePrice;
    let allFruitPrice = fruitKilogram * fruitPrice;
    let sum = allVegetablePrice + allFruitPrice;

    let euro = (sum / 1.94).toFixed(2);
    console.log(`Price is ${euro} euro`);
}
vegetableMarket([1.5, 2.5, 10, 10])