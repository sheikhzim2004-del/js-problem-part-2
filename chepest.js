//akta array naw tar vitor akta object naw and onekgula phone er detailes likho r shekhan theke akta  phone output dekhaw jar price ta shobcheye kom

const mobiles = [
    { name: 'xawmi', model: 'c56', price: 40000, camera: '12px', colour: 'black'},
    { name: 'realme', model: 'c56', price: 19000, camera: '12px', colour: 'black'},
    { name: 'oppo', model: 'c56', price: 25000, camera: '12px', colour: 'black'},
    { name: 'symphony', model: 'c56', price: 13000, camera: '12px', colour: 'black'},
    { name: 'iphon', model: 'c56', price: 100000, camera: '12px', colour: 'black'},
    { name: 'infinix', model: 'c56', price: 28000, camera: '12px', colour: 'black'},
    { name: 'samsung', model: 'c56', price: 70000, camera: '12px', colour: 'black'}
]

// low budget phone
function getChepestPhone(phones) {
    let chep = phones[0];
    for (const phone of phones) {
        if(phone.price < chep.price){
            chep = phone;
        }
    }
    return chep;
}

const chepestPhone = getChepestPhone(mobiles);
console.log('The low budget phone is : ', chepestPhone);


//hich budget phone
function getHigherPhone(phones) {
    let high = phones[0];
    for (const phone of phones) {
        if(phone.price > high.price){
            high = phone;
        }
    }
    return high;
}
const higherPhone = getHigherPhone(mobiles);
console.log('The high budget phone is : ', higherPhone);