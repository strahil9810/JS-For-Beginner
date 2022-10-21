function figuresArea([figureType, sideA, sideB]){
    let figures = figureType;
    let a = 0;
    let b = 0;
    let r = 0;
    let h = 0;

    if (figures == "square"){
        a = parseFloat(sideA);
        let area = (a * a).toFixed(3);
        console.log(area);
    }
    else if (figureType == "rectangle"){
        a = parseFloat(sideA);
        b = parseFloat(sideB);
        let area = (a * b).toFixed(3);
        console.log(area);
    }
    else if (figures == "circle"){
        r = parseFloat(sideA);
        let area = (Math.PI * r * r).toFixed(3);
        console.log(area);
    }
    else if (figures == "triangle"){
        a = parseFloat(sideA);
        h = parseFloat(sideB);
        let area = (a * h / 2).toFixed(3);
        console.log(area);
    }
}
figuresArea(["triangle", 4.5, 20])