import { capitalize, reverseString } from "./methods.js";

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
