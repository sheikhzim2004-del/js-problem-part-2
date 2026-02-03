/**
 * quentity under 100 so per products price ----> 100 taka
 * quentity more than 101-200 so per products price ----> 90 taka
 * quentity more than 201 so per products price ----> 70 taka
 * 
 */

//discount ber korte avabe ber kora lage
function getDiscountPrice (products){
  if(products <= 100){
    const total = products * 100;
    return ['no discount', total];
  }
  else if (products <=200){
    const total = products * 90;
    return ['10 % discount', total];
  }
  else{
    const total = products * 70;
    return ['30 % discount', total];
  }
}

const totalDiscountPrice = getDiscountPrice(220);
console.log(totalDiscountPrice);