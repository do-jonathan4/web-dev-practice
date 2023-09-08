const reverseString = require("./reverseString");

test("reverseString function exists", () => {
  expect(reverseString).toBeDefined();
});

test("string reverses", () => {
  expect(reverseString("abc")).toEqual("cba");
});

test("string reverses with uppercase", () => {
  expect(reverseString("Abc")).toEqual("cba");
});
