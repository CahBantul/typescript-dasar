interface Laptop {
  merk: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  merk: string = 'Asus';
  isGaming: boolean = true;
  on(): void {
    console.log('Laptop Nyala');
  }
  off(): void {
    console.log('Laptop Mati');
  }
}

class Mac implements Laptop {
  merk: string = 'Apple';
  typeKeyboard: string = 'biasa';
  on(): void {
    console.log('Laptop Nyala');
  }
  off(): void {
    console.log('Laptop Mati');
  }
}

let asus = new Asus();
console.log(asus);
let mac = new Mac();
console.log(mac);
