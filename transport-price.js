function transportPrice([kilometer, partOfDay]){
    let km = parseInt(kilometer);
    let dayOrNight = partOfDay;
    let price = 0;

    if (km < 20){
        if (dayOrNight === "day"){
            price = km * 0.79 + 0.70;
            console.log(price);
        }
        else if (dayOrNight === "night"){
            price = km * 0.90 + 0.70;
            console.log(price);
        }
    }
    else if (km >= 20 && km < 100){
        price = km * 0.09;
        console.log(price);
    }
    else if (km >= 100){
        price = km * 0.06;
        console.log(price);
    }
}
transportPrice([250, "day"])