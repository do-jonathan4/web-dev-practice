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
  expect("team").not.toMatch(/I/i);
});

test("Admin should be in usernames", () => {
  const usernames = ["john", "jim", "admin"];
  expect(usernames).toContain("admin");
});

test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions
    .fetchUser()
    .then((data) => expect(data.name).toEqual("Leanne Graham"));
});

test("User fetched name should be Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
