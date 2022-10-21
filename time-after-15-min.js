function timeAfterFifteenMinutes([hour, minute]){
    let clockHour = parseInt(hour);
    let clockMinute = parseInt(minute);
    let minutesAfter = clockMinute + 15;

    if (minutesAfter > 59){
        clockHour++;
        if(clockHour > 23){
            clockHour = 0;
        }
        minutesAfter = minutesAfter - 60;
        if (minutesAfter < 10){
            console.log(`${clockHour}:0${minutesAfter}`);
        }
        else{
            console.log(`${clockHour}:${minutesAfter}`);
        }
    }
    else{
        if (minutesAfter < 10){
            console.log(`${clockHour}:0${minutesAfter}`);
        }
        else{
            console.log(`${clockHour}:${minutesAfter}`);
        }
    }
}
timeAfterFifteenMinutes([11, 08])