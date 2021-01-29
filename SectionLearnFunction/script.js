'use sctrict';
function logger() {
    console.log("test")
}

logger();

function calcAge1(birthDay) {
    return age = 2020 - birthDay;
}

console.log(calcAge1(1996));

//This is arrow  funstion

const value = diedDay => 1996 - diedDay;

const test = value(2020)
console.log(test)

const geOfRetirement = (birthYeah, name) => {
    const age = 2020 - birthYeah;
    const retirement = 65 - age;
    return "name is ${name} ";
}

//This recursive function section
const recursive = getNumber => {
    if (Number(getNumber) <= 1) {
        return 1;
    }
    var sonuc = 1;
    return getNumber * recursive(getNumber - 1);
}

const result = recursive(3);

const calcAvg = (a, b, c) => (a + b + c) / 3;

//Learn array element

const year = new Array(12, 12, 12, 12);

console.log(year);

let arraylist = new Array();


// var name = "Yahya";
// var result1 = '';
// var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// var charactersLength = characters.length;
// var firstIndex = 0;
// var complete = ""
// for (var i = 0; i < 100; i++) {
//     result1 = characters.charAt(Math.floor(Math.random() * charactersLength));
//     if (name[firstIndex] == result1) {
//         complete += result1;
//         if (firstIndex == name.length) {
//             break
//         }
//         firstIndex++;
//     }
// }
// console.log("test" + complete);

const calcTip = function (bill) {

    return bill >= 50 && bill <= 300 ? bill = 0.15 : bill = 0.2;
}

