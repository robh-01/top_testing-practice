import { capitalize, reverseString, caesarCipher } from "./methods.js";

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
