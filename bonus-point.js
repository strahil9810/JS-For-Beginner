function bonusPoint(number){
    let num = parseFloat(number);
    let allBonus = 0;
    let allPoint = 0;

    if (num <= 100 && num % 2 === 0){
        let bonus = 5;
        let evenPoint = 1;
        allBonus = bonus + evenPoint;
        allPoint = num + allBonus;
        console.log(`Bonus point is ${allBonus}`);
        console.log(`Point after bonus is ${allPoint}`);
    }
    else if (num <= 100 && num % 5 === 0){
        let bonus = 5;
        let numberEndFive = 2;
        allBonus = bonus + numberEndFive;
        console.log(`Bonus point is ${allBonus}`);
        allPoint = num + allBonus;
        console.log(`Point after bonus is ${allPoint}`);
    }
    else if (num <= 100){
        let bonus = 5;
        console.log(`Bonus points is ${bonus}`);
        allPoint = num + bonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
    else if (num > 100 && num <= 1000 && num % 2 === 0){
        let bonus = num * 0.20;
        let evenPoint = 1;
        allBonus = bonus * evenPoint;
        console.log(`Bonus point is ${allBonus}`);
        allPoint = num + allBonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
    else if (num > 100 && num <= 1000 && num % 5 === 0){
        let bonus = num * 0.20;
        let numberEndFive = 2;
        allBonus = bonus + numberEndFive;
        console.log(`Bonus points is ${allBonus}`);
        allPoint = num + allBonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
    else if (num > 100 && num <= 1000){
        let bonus = num * 0.20;
        console.log(`Bonus points is ${bonus}`);
        allPoint = num + bonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
    else if (num > 1000 && num % 2 === 0){
        let bonus = num * 0.10;
        let evenPoint = 1;
        allBonus = bonus + evenPoint;
        console.log(`Bonus points is ${allBonus}`);
        allPoint = num + allBonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
    else if (num > 1000 && num % 5 === 0){
        let bonus = num * 0.10;
        let numberEndFive = 2;
        allBonus = bonus + numberEndFive;
        console.log(`Bonus points is ${allBonus}`);
        allPoint = num + allBonus;
        console.log(`Points aftes bonus is ${allPoint}`);
    }
    else if (num > 1000){
        let bonus = num * 0.10;
        console.log(`Bonus points is ${bonus}`);
        allPoint = num + bonus;
        console.log(`Points after bonus is ${allPoint}`);
    }
}
bonusPoint(15875)