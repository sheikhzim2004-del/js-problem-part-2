function add (num1, num2){
  return num1 + num2;
}
function substract (num1, num2){
  return num1 - num2;
}
function multiply (num1, num2){
  return num1 * num2;
}
function devided (num1, num2){
  return num1 / num2;
}

function calculator (a, b, operator){
  if (operator === 'add'){
    const result = add(a,b);
    return result;
  }
  else if(operator === 'substrack'){
    const result = substract(a, b);
    return result;
  }
  else if (operator === 'multiply'){
    const result = multiply(a,b);
    return result;
  }
  else if (operator === 'devided'){
    const result = devided(a,b);
    return result;
  }
  else{
    return "only 'add', 'substruct', 'multiply', 'devided' operator is allowed";
  }
}

const output = calculator(4, 6, 'substrack');
console.log(output);


