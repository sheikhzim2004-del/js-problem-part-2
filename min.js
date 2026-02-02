
//shoncheye kom damer phone take output hisabe dekhaw
const prices = [15000, 19000, 12000, 30000, 150000, 38000];

function getMin (prices){
    let minPrice = prices[0];
    for(const price of prices){
        if(price < minPrice){
            minPrice = price;
        }
    }
    return minPrice;
}
const minPrice = getMin(prices);
console.log('There is lower budget price of phone is: ', minPrice);