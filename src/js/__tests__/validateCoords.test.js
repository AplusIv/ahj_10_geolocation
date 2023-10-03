import validateCoords from "../validateCoords";

describe('should pass luhn algorithm and show card system', () => {
  test('should return true after validating coords', () => {
    const result = validateCoords([32.1772375,-129.7764664683]);
    expect(result).toBe(true);
  });
});