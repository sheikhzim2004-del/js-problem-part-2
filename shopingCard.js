

//atake ami jodi akhon total cost ber korte cai with quentity so=========
const products = [
    {name: 'shampoo', price: 200, quentity: 2},
    {name: 'shirt', price: 500, quentity: 1},
    {name: 'pant', price: 700, quentity: 2},
    {name: 'meril', price: 100, quentity: 2},
    {name: 'shoes', price: 1200, quentity: 1}
];


function getTotalCost (products){
    let total = 0;
    for(const product of products){
        const perProductTotal = product.price * product.quentity;
        total = total + perProductTotal;
    }
    return total;
}

const totalCost = getTotalCost(products);
console.log('amar ajker shoping cost only : ', totalCost);