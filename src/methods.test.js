import {
  capitalize,
  reverseString,
  caesarCipher,
  calculator,
  analyzeArray
} from "./methods.js";

describe("'capitalize' function works as expected", () => {
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

describe("'reverseString' function works as expected", () => {
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

describe("'caesarCipher' function works as expected", () => {
  test("works for a lowercase letters", () => {
    expect(caesarCipher("don", 3)).toBe("grq");
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("works for a capital letters", () => {
    expect(caesarCipher("DON", 3)).toBe("GRQ");
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
  });
  test("works for mixed Small and Capital letters with consisting of some non alphabetic characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
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

describe("'analyzeArray' function works as expected", () => {
  test("should return correct object for a valid array", () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("should return correct values for an array with one number", () => {
    const result = analyzeArray([5]);
    expect(result).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1,
    });
  });

  test("should handle an array with all identical numbers", () => {
    const result = analyzeArray([3, 3, 3, 3]);
    expect(result).toEqual({
      average: 3,
      min: 3,
      max: 3,
      length: 4,
    });
  });

  test("should throw an error if input is not an array", () => {
    expect(() => analyzeArray("not an array")).toThrow(
      "Input must be an array of numbers"
    );
  });

  test("should throw an error if array contains non-number elements", () => {
    expect(() => analyzeArray([1, 2, "three"])).toThrow(
      "Input must be an array of numbers"
    );
  });

  test("should handle an empty array gracefully", () => {
    expect(() => analyzeArray([])).toThrow("Input must be an array of numbers");
  });

  test("should handle negative numbers correctly", () => {
    const result = analyzeArray([-1, -8, -3, -4, -2, -6]);
    expect(result).toEqual({
      average: -4,
      min: -8,
      max: -1,
      length: 6,
    });
  });
});