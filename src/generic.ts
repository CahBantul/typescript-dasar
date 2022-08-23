// function getData(value: any) {
//   return value;
// }

// console.log(getData('halo'));
// console.log(getData(1));

// // generic
// function myData<T>(value: T) {
//   return value;
// }
// console.log(myData('halo').length);
// console.log(myData(1));

// // generic
// const arrowFunc = <T>(value: T) => {
//   return value;
// };
class List<T> {
  private data: T[];
  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(2);
numbers.addMultiple(1, 6, 9, 7);
console.log('number', numbers.getAll());

let random = new List<number | string>(1, 'a', 2);
random.add(2);
random.addMultiple(2, 'halo', 1000);
console.log('random', random.getAll());
