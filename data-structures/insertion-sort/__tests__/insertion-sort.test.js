"use strict";

const insSort = require("../insertion-sort.js");

let arrayOne = [8, 4, 23, 42, 16, 15];
let arrayTwo = [20, 18, 12, 8, 5, -2];
let arrayThree = [5, 12, 7, 5, 5, 7];

describe("insSort To be Orderly", () => {
  it("The First Array Test", () => {
    insSort(arrayOne);

    expect(arrayOne).toStrictEqual([4, 8, 15, 16, 23, 42]);
  });

  it("The second Array Test", () => {
    insSort(arrayTwo);

    expect(arrayTwo).toStrictEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("The third Array Test", () => {
    insSort(arrayThree);

    expect(arrayThree).toStrictEqual([5, 5, 5, 7, 7, 12]);
  });
});
