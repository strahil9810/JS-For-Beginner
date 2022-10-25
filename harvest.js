function harvest([vineyardArea, vineyardOneMeter, vineyardNeedLiters, workers]){
    let areaVineyard = parseInt(vineyardArea);
    let oneMeterVineyard = parseFloat(vineyardOneMeter);
    let needVineyardLiters = parseInt(vineyardNeedLiters);
    let allWorkers = parseInt(workers);

    let harvestWine = areaVineyard * oneMeterVineyard * 0.4;
    let wine = harvestWine / 2.5;
    if (wine >= needVineyardLiters){
        let wineLeft = wine - needVineyardLiters;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / allWorkers)} liters per person.`);
    }
    else{
        console.log(`It will be a tough winter! More ${Math.floor(needVineyardLiters - wine)} liters wine needed.`);
    }
}
harvest([1020, 1.5, 425, 4])