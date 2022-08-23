// tipe data balikan function
function getName(): string {
  return 'nozami';
}

console.log('nama :', getName());

function getAge(): number {
  return 25;
}

console.log('umur :', getName());

function printAddress(): void {
  console.log('Surabaya');
}

printAddress();

// arguments
function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

const result = multiply(2, 100);
console.log('result :', result);

// function as type
type Tambah = (val1: number, val2: number) => number;

const add: Tambah = (val1: number, val2: number): number => {
  return val1 + val2;
};

console.log('add', add(10, 5));

// default parameter
function fullname(first: string, last: string = ''): string {
  return first + last;
}

console.log('my Name is :', fullname('fardan', 'Nozami'));

// optional parameter
function getUmur(val1: number, val2?: number): string {
  return val1 + ' ' + val2;
}

console.log('getUmur', getUmur(1, 2));
