//max 3 hole ber korbo jevabe

const jim = 65;
const kim = 69;
const tim = 31;

if(jim > kim && jim > tim){
    console.log('Jim is the Dev boss');
}
else if(kim > jim && kim > tim){
    console.log('Kim is the boss');
}
else{
    console.log('tim is the best of them');
}

// akoi kaj jodi function er maddhome korte cai tahole ki kora jete pare

function maxOfThree (num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return num1;
    }
    else if(num2 > num1 && num2 > num3){
        return num2;
    }
    else {
        return num3;
    }
}



const maxResult = maxOfThree(65, 94, 87);
console.log('the max number is: ', maxResult);


//aro beshi shonkhay hole shohoj system ta hosse j Math.max use kora
//example
const shamim1 = 64;
const shamim2 = 56;
const shamim3 = 64;
const shamim4 = 65;
const shamim5 = 94;
const shamim6 = 91;
const shamim7 = 34;
const shamim8 = 67;
const shamim9 = 97;

const maxNumber = Math.max(shamim1, shamim2, shamim3, shamim4, shamim5, shamim6, shamim7, shamim8, shamim9);
const minNumber = Math.min(shamim1, shamim2, shamim3, shamim4, shamim5, shamim6, shamim7, shamim8, shamim9);
console.log('The max number of shamim is: ', maxNumber);
console.log('The min number of shamim is: ', minNumber);

//avabe shohojei max number othoba min number ber korea jay