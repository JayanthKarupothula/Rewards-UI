import { calculatePoints } from '../utils';

describe('calculatePoints', () => {
  test('calculates points correctly for amounts above $100', () => {
    expect(calculatePoints(120)).toBe(90); 
  });

  test('calculates points correctly for amounts between $50 and $100', () => {
    expect(calculatePoints(75)).toBe(25); 
  });

  test('calculates points correctly for amounts below $50', () => {
    expect(calculatePoints(30)).toBe(0);
  });

  test('calculates points correctly for edge cases', () => {
    expect(calculatePoints(100)).toBe(50);
    expect(calculatePoints(50)).toBe(0);
  });
});
