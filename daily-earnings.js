function dailyEarnings([workDayOfMonth, priceOfDay,convertUSDtoBGN]){
    let workMonthDay = parseInt(workDayOfMonth);
    let dayPrice = parseFloat(priceOfDay);
    let convertDollarToLeva = parseFloat(convertUSDtoBGN)

    let monthPrice = workMonthDay * dayPrice;
    let yearPrice = monthPrice * 12 + monthPrice * 2.5;
    let priceAfterTax = yearPrice * 0.25;
    let levaForYear = yearPrice - priceAfterTax;
    let dollarToLeva = levaForYear * convertDollarToLeva;
    let leva = dollarToLeva / 365;
    console.log(`Price for one work day is ${leva.toFixed(2)} leva`);
}
dailyEarnings([22, 199.99, 1.50])