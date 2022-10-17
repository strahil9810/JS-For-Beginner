function rectangleAreaInPlace([X1, Y1, X2, Y2]){
    let x1 = parseFloat(X1);
    let y1 = parseFloat(Y1);
    let x2 = parseFloat(X2);
    let y2 = parseFloat(Y2);

    let width = Math.max(x1, x2) - Math.min(x1,x2);
    let height = Math.max(y1, y2) - Math.min(y1,y2);

    let area = width * height;
    let perimeter = 2 * (width + height);

    console.log(area);
    console.log(perimeter);
}
rectangleAreaInPlace([60, 20, 10, 50])