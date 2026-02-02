

/**
 * wood quentity per product cft
 * cheir ----> 3cft
 * table ----> 10cft
 * bed ------> 50cft
 * akhon total konta kotota nei nei jeno exact result pai
 */

//example 01
function woodQuentity(cheirQuentity, tableQuentity, bedQuentity){
    const perCheir = 3;
    const perTable = 10;
    const perBed = 50;

    const allCheirWood = perCheir * cheirQuentity;
    const allTableWood = perTable * tableQuentity;
    const allBedWood = perBed * bedQuentity;

    const totalWood = allCheirWood + allTableWood + allBedWood;
    return totalWood;
}
const totalWood = woodQuentity(1, 2, 1);
console.log('Need of total wood is: ', totalWood, 'cft');


//example 02
/**
 * shirt price ----> 500
 * pant price -----> 400
 * shoes price ------> 1200
 * akhon function use kore fixd koro 
 */

function priceTotal (shirt, pant, shoes){
    const perShirt = 500;
    const perPant = 400;
    const perShoes = 1200;

    const totalShirt = shirt * perShirt;
    const totalPant = pant * perPant;
    const totalShoes = shoes * perShoes;

    const totalPrice = totalShirt + totalPant + totalShirt;
    return totalPrice;
}

const totalPrice = priceTotal(2, 3, 1);
console.log('My total shoping price is: ', totalPrice);