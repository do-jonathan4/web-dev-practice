const functions = require("./functions");

// beforeEach(() => initDataBase());
// afterEach(() => closeDataBase());

// beforeAll(() => initDataBase());
// afterAll(() => closeDataBase());

// const initDataBase = () => console.log("Database Initialized...");
// const closeDataBase = () => console.log("Database Closed...");

const nameCheck = () => console.log("Checking Name...");

describe("Checking Names", () => {
  beforeEach(() => nameCheck());

  test("User is John", () => {
    const name = "John";
    expect(name).toBe("John");
  });
  test("User is Joe", () => {
    const name = "Joe";
    expect(name).toBe("Joe");
  });
});

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
