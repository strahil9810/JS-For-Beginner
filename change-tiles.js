function changeTiles([landingLong, tileWidth, tileLong, benchWidth, benchLong]){
    let landingL = parseInt(landingLong);
    let tileW = parseFloat(tileWidth);
    let tileL = parseFloat(tileLong);
    let benchW = parseInt(benchWidth);
    let benchL = parseInt(benchLong);

    let landingArea = landingL * landingL;
    let benchArea = benchW * benchL;
    let tileArea = tileW * tileL;

    let areaToCover = landingArea - benchArea;
    let needTile = (areaToCover / tileArea).toFixed(2);
    let time = (needTile * 0.2).toFixed(2);

    console.log(`It's need ${needTile} tiles`);
    console.log(`Need time is ${time}`);
}
changeTiles([40, 0.8, 0.6, 3, 5])