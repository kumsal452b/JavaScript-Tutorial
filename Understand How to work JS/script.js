'use strict';

const yahya = {
  firstName: 'Yahya',
  year: '1996',
  calcAge: () => {
    console.log(`Hey ${this.firstName}`);
  },
  test: function () {
    console.log(`Hey ${this.firstName}`);
  },
};

yahya.calcAge();
yahya.test();
