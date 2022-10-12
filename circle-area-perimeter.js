function circleAreaPerimeter(radius){
    let rad = parseFloat(radius);

    let perimeter = 2 * Math.PI * rad;
    console.log("Circle perimeter = " + perimeter);

    let area = Math.PI * rad * rad;
    console.log("Circle area = " + area);
}
circleAreaPerimeter(10)