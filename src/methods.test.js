import { capitalize, reverseString } from "./methods.js";

test("function 'capitalize' works", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
  expect(capitalize("my name is ROSHAN")).toBe("My name is ROSHAN");
  expect(capitalize("-Roshan Bhusal")).toBe("-Roshan Bhusal");
});

test("function 'reverseString' works", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("Roshan")).toBe("nahsoR");
  expect(reverseString("1587")).toBe("7851");
  expect(reverseString("excited!!")).toBe("!!deticxe");
  expect(reverseString("")).toBe("");
  expect(reverseString("a")).toBe("a");
  expect(reverseString(" spaces ")).toBe(" secaps ");
});
