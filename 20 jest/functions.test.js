const functions = require("./functions");

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});
test("Adds 2 + 2 to NOT equal 5", () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test("Should be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("Should be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

test("User should be Brad Smith object", () => {
  expect(functions.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Smith",
  });
});

test("Should be under 1600", () => {
  const a = 800;
  const b = 700;
  expect(a + b).toBeLessThan(1600);
});

test("There is no I in team", () => {
  expect("team").not.toMatch(/I/);
});
