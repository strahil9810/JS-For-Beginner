function convertMetric([number,unitsIn, unitsOut]){
    let num = parseFloat(number);
    let firstUnits = unitsIn.toLowerCase();
    let secondUnits = unitsOut.toLowerCase();

    switch(firstUnits){
        case 'km':
            num = num / 0.001;
            break;
        case 'mm':
            num = num / 1000;
            break;
        case 'ft':
            num = num / 3.2808399;
            break;
        case 'cm':
            num = num / 100;
            break;
        case 'mi':
            num = num / 0.000621371192;
            break;
        case 'in':
            num = num / 39.3700787;
            break;
        case 'yd':
            num = num / 1.0936133;
            break;
    }
    switch(secondUnits){
        case 'km':
            num = num * 0.001;
            break;
        case 'mm':
            num = num * 1000;
            break;
        case 'ft':
            num = num * 3.2808399;
            break;
        case 'cm':
            num = num * 100;
            break;
        case 'mi':
            num = num * 0.000621371192;
            break;
        case 'in':
            num = num * 39.3700787;
            break;
        case 'yd':
            num = num * 1.0936133;
            break;
    }
    console.log(num);
}
convertMetric([450, "yd", "km"])