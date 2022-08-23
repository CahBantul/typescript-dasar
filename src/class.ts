export class User {
  public name: string;
  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

let user = new User('Fardan', 25);
console.log(user);

// user
// Admin
// member
class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = '';
  static getRoleName: string = 'Admin';

  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  static getRoleNameMethod(): string {
    return 'halo boss';
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  set email(value: string) {
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

let admin = Admin.getRoleNameMethod();
console.log('admin', admin);
