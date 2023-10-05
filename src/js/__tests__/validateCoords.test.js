import validateCoords from '../validateCoords';

describe('should check coordinates', () => {
  test('should return true after validating coords (1 option)', () => {
    const result = validateCoords('[32.1772375,-129.7764664683]');
    expect(result).toBe('[32.1772375, -129.7764664683]');
  });

  test('should return true after validating coords (2 option)', () => {
    const result = validateCoords('03.1772375, -129.7764664683');
    expect(result).toBe('[3.1772375, -129.7764664683]');
  });

  test('should return true after validating coords (3 option)', () => {
    const result = validateCoords('[-11.2345,-128.545363]');
    expect(result).toBe('[-11.2345, -128.545363]');
  });

  test('should return true after validating coords (4 option)', () => {
    const result = validateCoords('01.2345,128.545363');
    expect(result).toBe('[1.2345, 128.545363]');
  });

  test('should return false after validating coords (wrong latitude)', () => {
    const result = validateCoords('[132.1772375,-129.7764664683]');
    expect(result).toBe(false);
  });

  test('should return false after validating coords (wrong longitude)', () => {
    const result = validateCoords('[32.1772375, 528.7764664683]');
    expect(result).toBe(false);
  });
});
