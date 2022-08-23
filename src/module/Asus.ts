import BaseLaptop from './BaseLaptop';

export default class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, withNumeric: boolean, withTouchButton: boolean) {
    super('Asus', type, withNumeric, withTouchButton);
  }
}
