function currencyConvert([valute1, valute2, sum]){
    let valuta = valute1;
    let valuta1 = valute2;
    var suma = parseFloat(sum);

    if(valuta == "BGN" && valuta1 == "USD"){
        suma = (suma / 1.79549).toFixed(2);
        console.log(`${suma} USD`);
    }
    else if(valuta == "BGN" && valuta1 == "EUR"){
        suma = (suma / 1.95583).toFixed(2);
        console.log(`${suma} EUR`);
    }
    else if(valuta == "BGN" && valuta1 == "GBP"){
        suma = (suma / 2.53405).toFixed(2);
        console.log(`${suma} GBP`);
    }
    else if(valuta == "USD" && valuta1 == "BGN"){
        suma = (suma * 1.79549).toFixed(2);
        console.log(`${suma} BGN`);
    }
    else if(valuta == "USD" && valuta1 == "EUR"){
        suma = ((suma * 1.79549) / 1.95583).toFixed(2);
        console.log(`${suma} EUR`);
    }
    else if(valuta == "USD" && valuta1 == "GBP"){
        suma = ((suma * 1.79549) / 2.53405).toFixed(2);
        console.log(`${suma} GBP`);
    }
    else if (valuta == "EUR" && valuta1 == "BGN"){
        suma = (suma * 1.95583).toFixed(2);
        console.log(`${suma} BGN`);
    }
    else if(valuta == "EUR" && valuta1 == "USD"){
        suma = ((suma * 1.95583) / 1.79549).toFixed(2);
        console.log(`${suma} USD`);
    }
    else if(valuta == "EUR" && valuta1 == "GBP"){
        suma = ((suma * 1.95583) / 2.53405).toFixed(2);
        console.log(`${suma} GBP`);
    }
    else if(valuta == "GBP" && valuta1 == "BGN"){
        suma = (suma * 2.53405).toFixed(2);
        console.log(`${suma} BGN`);
    }
    else if(valuta == "GBP" && valuta1 == "USD"){
        suma = ((suma * 2.53405) / 1.79549).toFixed(2);
        console.log(`${suma} USD`);
    }
    else if(valuta == "GBP" && valuta1 == "EUR"){
        suma = ((suma * 2.53405) / 1.95583).toFixed(2);
        console.log(`${suma} EUR`);
    }
}currencyConvert(["USD", "EUR", 150.35])