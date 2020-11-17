import { sum2 } from '../';

describe('sum2 should calculate a sum properly', () => {
  test('three positive numbers', () => {
    expect(sum2(3, 4)).toBe(7);
  });
  test('three negative numbers', () => {
    expect(sum2(3, -4)).toBe(-1);
  });
});