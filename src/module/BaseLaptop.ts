import iLaptop from './iLaptop';
import { a, b } from './Keyboard';

export default class BaseLaptop<T> implements iLaptop<T> {
  merk: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(
    merk: string,
    type: T,
    withNumeric: boolean,
    withTouchButton: boolean
  ) {
    this.merk = merk;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a(): void {
    console.log(a());
  }

  b(): void {
    console.log(b());
  }
}
