const chunkArray = require("./chunkArray");

test("chunkArray function exists", () => {
  expect(chunkArray).toBeDefined();
});

test("chunk an array of 10 values with a length of 2", () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const len = 2;
  expect(chunkArray(nums, len)).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10],
  ]);
});

test("chunk an array of 3 values with a length of 1", () => {
  const nums = [1, 2, 3];
  const len = 1;
  expect(chunkArray(nums, len)).toEqual([[1], [2], [3]]);
});
