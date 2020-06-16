let mergeSort = require("../merge-sort.js");

describe("mergeSorting properly", () => {
  it("sorts arrays as we expected ", () => {
    let arr = [8, 4, 23, 42, 16, 15];
    mergeSort(arr);
    expect(arr).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it("reverse sorted arrays", () => {
    let arr = [20, 18, 12, 8, 5, -2];
    mergeSort(arr);
    expect(arr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it("a single element array", () => {
    let arr = [5];
    mergeSort(arr);
    expect(arr).toEqual([5]);
  });

  it("empty array", () => {
    let arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });
});
