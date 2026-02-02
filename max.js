

//j beshi she kisu akta pabe ata ber korar structure
//example no 01
const ramisha = 82;
const kabbo = 80;
if(ramisha > kabbo){
    console.log('Ramisha will get a giftbox');
}
else(
    console.log('Kabbo will be get a giftbox')
)


//example no 02 ============ using function

function getGift (max1, max2){
    if(max1>max2){
        return max1;
    }
    else{
        return max2;
    }
}


const max1 = getGift(25, 68);
const max2 = getGift(65, 97);
const maxTotal = getGift(max1, max2);
console.log(max1, max2);
console.log(maxTotal);
