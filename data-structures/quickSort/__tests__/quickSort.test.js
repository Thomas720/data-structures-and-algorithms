"use strict";

const quickSort = require("../quickSort.js");

describe("Qick Sort Properly", () => {
  it("Sort the Array as I expected", () => {
    let arr = [4, 7, 1, 6, 8, 3];
    quickSort(arr);
    expect(arr).toEqual([1, 3, 4, 6, 7, 8]);
  });
});
