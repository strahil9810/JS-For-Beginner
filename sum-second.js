function sumSeconds([competitor1, competitor2, competitor3]){
    let comp1 = parseInt(competitor1);
    let comp2 = parseInt(competitor2);
    let comp3 = parseInt(competitor3);
    let allSecond = comp1 + comp2 + comp3;
    let minute = 0;

    if(allSecond <= 59){
        if(allSecond <10){
            console.log(`${minute}:0${allSecond}`);
        }
        else if(allSecond >= 10){
            console.log(`${minute}:${allSecond}`);
        }
    }
    else if(allSecond >=60 && allSecond <= 119){
        minute++;
        allSecond = allSecond - 60;
        if(allSecond < 10){
            console.log(`${minute}:0${allSecond}`);
        }
        else if(allSecond >= 10){
            console.log(`${minute}:${allSecond}`);
        }
    }
    else if(allSecond >= 120){
        minute += 2;
        allSecond = allSecond - 120;
        if(allSecond < 10){
            console.log(`${minute}:0${allSecond}`);
        }
        else if(allSecond >= 10){
            console.log(`${minute}:${allSecond}`);
        }
    }
}
sumSeconds([14, 12, 10])