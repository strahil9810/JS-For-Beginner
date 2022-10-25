function sleepCat(freeDay){
    let holiday = parseInt(freeDay);
    let workDay = 365 - holiday;
    let realGameTime = workDay * 63 + holiday * 127;
    let difference = Math.abs(realGameTime - 30000);
    let hour = difference / 60;
    let minute = difference % 60;

    if (realGameTime > 30000){
        console.log("Tom will run away");
        console.log(`${Math.floor(hour)} hours and ${Math.floor(minute)} minutes more for play`);
    }
    else{
        console.log("Tom sleeps well");
        console.log(`${Math.floor(hour)} hours and ${Math.floor(minute)} minutes less for play`);
    }
}
sleepCat(113)