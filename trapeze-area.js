function areaTrapeze([sideA, sideB, height]){
    let a = parseFloat(sideA);
    let b = parseFloat(sideB);
    let h = parseFloat(height);

    let area = (a + b) * h / 2;
    console.log("Trapezoid area = " + area);
}
areaTrapeze([3, 4, 5])