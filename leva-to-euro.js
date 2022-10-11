function solve(price){
    let leva = parseFloat(price);
    let euro = (leva / 1.95583).toFixed(2);
    console.log(`Euro is ${euro}`);
}
solve(50)