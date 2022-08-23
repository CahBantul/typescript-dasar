export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }
}

let user = new User('Fardan', 25);
console.log(user);
