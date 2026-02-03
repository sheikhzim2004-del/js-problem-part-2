

//wrong typof number thakle dhore felar system
function multiply (num1, num2){
  if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    return 'plese type a number';
  }
  return num1 * num2;
}
const result = multiply(53, '5');
console.log(result);


console.log('===========================================');
//wrong typof string thakle dhore felar system
function fullName(first, last){
  if(typeof first !== 'string'){
    return 'first name should be a string';
  } else if(typeof last !== 'string'){
    return 'last name should be a string'
  }
  const fullName = first + ' ' + last;
  return fullName;
}

const full = fullName('Sheikh', 'Zim');
console.log(full);



console.log('===========================================');
//wrong typof object thakle dhore felar system
function getProductPrice (product){
  if(typeof product !== 'object' || product === null){
    return 'please provide an object';
  }else if(typeof product.price !== 'number'){
    return 'please provide a price in an object'
  }
  const price = product.price;
  return price;
}

const product = {
  name: 'shampoo',
  price: 250,
  colour: 'black',
  typeof: 'bottle'
};
// const productNull = null;
const productPrice = getProductPrice (product);
// const productPrice = getProductPrice('54');
console.log(productPrice);



console.log('===========================================');
function getArray (numbers){
  if(Array.isArray(numbers) === false){
    return 'please provide a array';
  }
  const third = numbers[2];
  return third;
}

const getArrayNum = [66,22,55,99,18,33];
const getResult = getArray(55);    //akhane array na deway check massage pathano hoyeche.
console.log(getResult);