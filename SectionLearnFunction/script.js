'use sctrict';
// function logger() {
//     console.log("test")
// }

// logger();

// function calcAge1(birthDay) {
//     return age = 2020 - birthDay;
// }

// console.log(calcAge1(1996));

// //This is arrow  funstion

// const value = diedDay => 1996 - diedDay;

// const test = value(2020)
// console.log(test)

// const geOfRetirement = (birthYeah, name) => {
//     const age = 2020 - birthYeah;
//     const retirement = 65 - age;
//     return "name is ${name} ";
// }

// //This recursive function section
// const recursive = getNumber => {
//     if (Number(getNumber) <= 1) {
//         return 1;
//     }
//     var sonuc = 1;
//     return getNumber * recursive(getNumber - 1);
// }

// const result = recursive(3);

// const calcAvg = (a, b, c) => (a + b + c) / 3;

// //Learn array element

// const year = new Array(12, 12, 12, 12);

// console.log(year);

// let arraylist = new Array();


// // var name = "Yahya";
// // var result1 = '';
// // var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
// // var charactersLength = characters.length;
// // var firstIndex = 0;
// // var complete = ""
// // for (var i = 0; i < 100; i++) {
// //     result1 = characters.charAt(Math.floor(Math.random() * charactersLength));
// //     if (name[firstIndex] == result1) {
// //         complete += result1;
// //         if (firstIndex == name.length) {
// //             break
// //         }
// //         firstIndex++;
// //     }
// // }
// // console.log("test" + complete);

// const calcTip = function (bill = Array()) {
//     var result = Array();
//     bill.forEach(Element => {
//         if (Element >= 50 && Element <= 300) {
//             result.push(0.15 * Element);
//         } else {
//             result.push(0.2 * Element);
//         }
//     })
//     return result;
// }
// const bills = [1, 123, 123, 242, 30, 400];
// console.log(calcTip(bills));

// //Create an object

// const information = {
//     name: "Yahya",
//     surname: "Alatas",
//     age: "23",
//     friends: ['Kumsal', 'Ayhan', 'ilyas']
// }

// console.log(information.age);
// const jonas = {
//     name: "Yahya",
//     surname: "Alatas",
//     age: "23",
//     friends: ['Kumsal', 'Ayhan', 'ilyas'],
//     bestFriend: this.friends[0]
// }
// console.log(jonas.bestFriend);

const yaho = {
    name: "jonas",
    surname: "alatas",
    driverLicence: false,
    age: 17,
    authLicence: function () {
        var theAge = 2021 - this.age;
        if (theAge >= 18) {
            this.driverLicence = true;
        }
        else {
            this.driverLicence = false;
        }
        return this.driverLicence;
    }
}
console.log(yaho.authLicence());

const calcBMI = (weigth, height) => {
    var test = height / 100;
    var sqrt = Math.pow(test, 2);
    var resultTest = (weigth / sqrt);

    return resultTest;
}
const denem = {
    test111: function () {
        this.s = "";
    }
}
var deneme = 'onu ddd'
const ses = 12;
console.log(`${deneme} `)
var kumsal = calcBMI(100, 170);
var yahya = calcBMI(50, 170);
var result = '${y}'
var test1 = kumsal > yahya ? 'Kumsal' : 'Yahya';
var test2 = kumsal < yahya ? 'Kumsal' : 'Yahya'
console.log(',grea then ');
console.log(')


