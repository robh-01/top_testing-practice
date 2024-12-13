import { capitalize } from "./methods.js";

test("function 'capitalize' works", () => {
  expect(capitalize("hello")).toBe("Hello");
  expect(capitalize("Hello")).toBe("Hello");
  expect(capitalize("my name is ROSHAN")).toBe("My name is ROSHAN");
  expect(capitalize("-Roshan Bhusal")).toBe("-Roshan Bhusal");
});
