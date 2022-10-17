function convertRadiansToDegree(radians){
    let rad = parseFloat(radians);
    let degree = Math.round((rad * 180) / Math.PI);
    console.log(degree);
}
convertRadiansToDegree(0.5236)