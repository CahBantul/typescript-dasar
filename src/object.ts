// Object

type User = {
  name: string;
  age: number;
};

let user: User = {
  name: 'fardan',
  age: 30,
};

console.log('user', user);

// union type
let phone: number | string;
phone = '081229822979';
console.log('phone :', phone);
phone = 8123141;
console.log('phone :', phone);
