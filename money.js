function money([bitcoin, chineYoan, commision]){
    let bit = parseInt(bitcoin);
    let yoan = parseFloat(chineYoan);
    let comm = parseFloat(commision) / 100;

    let bitcoinToLeva = bit * 1168;
    let yoanToDollar = yoan * 0.15;
    let dollarToLeva = yoanToDollar * 1.76;

    let leva = bitcoinToLeva + dollarToLeva;
    let euro = leva / 1.95;
    euro -= comm * euro;
    console.log(euro.toFixed(2));
}
money([7, 50200.12, 3])