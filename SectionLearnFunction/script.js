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
console.log(ageOfRetirement(1996, 'Yahya'));

//This recursive function section
const recursive = getNumber => {
    if (Number(getNumber) <= 1) {
        return 1;
    }
    var sonuc = 1;
    return getNumber * recursive(getNumber - 1);
}

const result = recursive(3);