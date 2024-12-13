import { capitalize, reverseString, calculator } from "./methods.js";

describe("'capitalize' function works", () => {
  test("capitalizes a simple word", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("keeps the already capitalized word as it is", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });
  test("capitalizes the first letter in the sentence", () => {
    expect(capitalize("my name is Roshan")).toBe("My name is Roshan");
  });
  test("leaves the characters which are not letters as it is", () => {
    expect(capitalize("-Roshan Bhusal")).toBe("-Roshan Bhusal");
  });
});

describe("'reverseString' function works", () => {
  test("reverses a simple word", () => {
    expect(reverseString("hello")).toBe("olleh");
  });
  test("reverses a word with capital letters", () => {
    expect(reverseString("Roshan")).toBe("nahsoR");
  });
  test("reverses numeric strings", () => {
    expect(reverseString("1587")).toBe("7851");
  });
  test("reverses a string with special characters", () => {
    expect(reverseString("excited!!")).toBe("!!deticxe");
  });
  test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
  });
  test("reverses a single character string", () => {
    expect(reverseString("a")).toBe("a");
  });
  test("reverses a string with spaces", () => {
    expect(reverseString(" spaces ")).toBe(" secaps ");
  });
});

describe("Calculator object works correctly", () => {
  test("add method correctly adds two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(2.5, 3.5)).toBe(6);
  });

  test("subtract method correctly subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(2, 7)).toBe(-5);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(10.5, 3.5)).toBe(7);
  });

  test("multiply method correctly multiplies two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-1, 4)).toBe(-4);
    expect(calculator.multiply(0, 5)).toBe(0);
    expect(calculator.multiply(1.5, 2)).toBe(3);
  });

  test("divide method correctly divides two numbers", () => {
    expect(calculator.divide(6, 2)).toBe(3);
    expect(calculator.divide(7, -1)).toBe(-7);
    expect(calculator.divide(0, 5)).toBe(0);
    expect(calculator.divide(5, 2)).toBe(2.5);
  });

  test("divide methods throws error when divided by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
