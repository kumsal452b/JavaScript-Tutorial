'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { resturantNama: Rname, location: loc } = restaurant;
console.log(Rname, loc);

var arr = [1, 2, 3, 4];
var arr2 = [5, 6, ...arr];
console.log(arr2);

var sum = function (...numbers) {
  console.log(numbers);
};

console.log('true' || 3);

sum(1, 1, 2, 3);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu) console.log(item);
const openingHours = restaurant.openingHours;

const property = Object.keys(openingHours);

for (const day of property) {
  console.log(day);
}
console.log(property);

const value = Object.values(openingHours);

console.log(value);

const entries = Object.entries(openingHours);
console.log(entries);
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1} : ${player}`);
}

let avarage = 0;
console.log('In here');
console.log('');
for (const odd of Object.values(game.odds)) {
  avarage += odd;
}
avarage /= Object.values(game.odds).length;
console.log(avarage);

for (const [team, odd] of Object.entries(game.odds)) {
  const theTeam = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${theTeam} ${odd}`);
}

//Set
const orderSet = new Set(['Yahya', 'Kumsal', 'Yahya', 'Sevda']);
console.log(orderSet);

const anserMap = new Map([
  ['questio', 'What is the bes programing language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct '],
  [false, 'Try again'],
]);
console.log('test');
for (const [key, value] of anserMap) {
  if (typeof key === 'number') console.log(`Anser ${key}:${value}`);
}
var request = window.prompt('Please select correct option');
const suggesion = parseInt(request);
if (typeof suggesion == 'number') {
  console.log(anserMap.get(suggesion === anserMap.get('correct')));
}
