

const hights = [65,95,64,68,69,53,49,55,81];


//array theke max number ber korar system
function getMax (numbers){
    let max = numbers[0];
    for (let numb of numbers){
        if(numb > max){
            max = numb;
        }
    }
    return max;
}
const maxResult = getMax(hights);
console.log('This is max number in the array: ', maxResult);



console.log('=========================================');
//array theke min number ber korar system
function getMin (numbers){
    let min = numbers[0];
    for(numb of numbers){
        if(min > numb){
            min = numb;
        }
    }
    return min;
}
const minResult = getMin(hights);
console.log('This is min number in this array: ', minResult);


//avabei kono array theke min and max number ber kora jabe.