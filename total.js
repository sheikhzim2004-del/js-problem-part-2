

//jodi array diye price er sum ber korte hoy

const products = [
    {name: 'shampoo', price: 200},
    {name: 'shirt', price: 500},
    {name: 'pant', price: 700},
    {name: 'meril', price: 100},
    {name: 'shoes', price: 1200}
];


function getShopingTotal (products){
    let sum = 0;
    for(const product of products){
        sum = sum + product.price
    }
    return sum;
}

const totalShopingCost = getShopingTotal(products);
console.log('ajker total shoping cost : ', totalShopingCost);

