const { expect } = require('@jest/globals');
const { utility } = require('./jjsester.js');
const { artificerNull } = require('./artificernull.js');

const { entry } = require('./enter');

test(' x+y ', () => {
  expect(utility(2, 3)).toBe(5);
  expect(utility(3, 3)).toBe(6);
  expect(utility(1, 1)).toBe(2);
});

test(' palying with exports ', () => {
  expect(entry(5, 4)).toBe(9);
});

test('superior testing suite', () => {
  expect(3).toBe(3);
  expect(utility(5, 5)).toBeGreaterThan(9);
  expect(utility(5, 5)).toBeGreaterThanOrEqual(10);
  expect(utility(5, 5)).toBeLessThan(20);
});

test('float values matchers', () => {
  expect(utility(0.1, 0.2)).toBeCloseTo(0.3);
});

describe('testing jest-describe', () => {
  test(' null matcher', () => {
    expect(artificerNull()).toBe(null);
  });

  test('float values sum ', () => {
    expect(utility(0.7, 0.1)).toBeCloseTo(0.8);

    expect(artificerNull()).toBeNull();
    expect(artificerNull()).toBeFalsy();
    expect(artificerNull()).toBeDefined();
    expect(artificerNull()).not.toBeTruthy();
    expect(artificerNull()).not.toBeUndefined();
  });
});
