import { Burger } from './burger';

describe('Burger', () => {
  it('should create an instance', () => {
    const directive = new Burger();
    expect(directive).toBeTruthy();
  });
});
