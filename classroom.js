function classroom([long, width]){
    let roomLong = parseFloat(long);
    let roomWidth = parseFloat(width);

    let col = Math.trunc((roomWidth -1) / 0.70);
    let row = Math.trunc(roomLong / 1.2);
    let result = col * row - 3;

    console.log(result);
}
classroom([8.4, 5.2])