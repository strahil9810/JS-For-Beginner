function speedInfo(speed){
    let infoSpeed = parseFloat(speed);

    if (infoSpeed <= 10){
        console.log("slow");
    }
    else if (infoSpeed > 10 && infoSpeed <= 50){
        console.log("average");
    }
    else if (infoSpeed > 50 && infoSpeed <= 150){
        console.log("fast");
    }
    else if (infoSpeed > 150 && infoSpeed <= 1000){
        console.log("ultra fast");
    }
    else if (infoSpeed > 1000){
        console.log("extremely fast");
    }
}
speedInfo(3500)