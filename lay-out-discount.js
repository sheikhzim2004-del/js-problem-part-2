/**
 * first 100 pice ----> 100 taka
 * 101 to 200 pice -----> 90 taka
 * 200 above pice ----> 70 taka
 */

function getLayoutDiscount (quentity){
  const first100Price = 100;
  const second100Price = 90;
  const above200 = 70;

  if(quentity <= 100){
    const total = first100Price * 100;
    return ['no discount', total];
  }
  else if(quentity <= 200){
    const first100Total = first100Price * 100;
    const remainingQuentity = quentity - 100;
    const remainingTotal = remainingQuentity * second100Price;
    const total = first100Total + remainingTotal;
    return ['10 % discount above 101 and under 200', total];
  }
  else{
    const first100Total = first100Price * 100;
    const second100Total = second100Price * 100;
    const remainingQuentity = quentity - 200;
    const remainingTotal = remainingQuentity * above200;
    const total = first100Total + second100Total + remainingTotal;
    return ['30 % discount above 200', total];
  }
}

const totalCost = getLayoutDiscount(250);
console.log(totalCost);