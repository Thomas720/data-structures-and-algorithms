"use strict";

const leftJoin = require("../left-join.js");

describe("leftJoin", () => {
  it("Similar keys", () => {
    let german = [
      { key: "one", value: "eins" },
      undefined,
      undefined,
      { key: "two", value: "zwei" },
      undefined,
      undefined,
      { key: "three", value: "drei" },
    ];
    let spanish = [
      { key: "one", value: "uno" },
      undefined,
      undefined,
      { key: "two", value: "dos" },
      undefined,
      undefined,
      { key: "three", value: "tres" },
    ];

    let joinedArray = leftJoin(german, spanish);

    expect(joinedArray).toEqual([
      { key: "one", values: ["eins", "uno"] },
      { key: "two", values: ["zwei", "dos"] },
      { key: "three", values: ["drei", "tres"] },
    ]);
  });

  it("Different keys", () => {
    let german = [
      { key: "one", value: "eins" },
      undefined,
      undefined,
      { key: "two", value: "zwei" },
      undefined,
      undefined,
      { key: "three", value: "drei" },
      undefined,
      { key: "four", value: "vier" },
    ];

    let spanish = [
      { key: "one", value: "uno" },
      undefined,
      undefined,
      { key: "two", value: "dos" },
      undefined,
      undefined,
      { key: "three", value: "tres" },
    ];

    let joinedArray = leftJoin(german, spanish);

    expect(joinedArray).toEqual([
      { key: "one", values: ["eins", "uno"] },
      { key: "two", values: ["zwei", "dos"] },
      { key: "three", values: ["drei", "tres"] },
      { key: "four", values: ["vier", null] },
    ]);
  });

  it("None matched keys", () => {
    let german = [
      { key: "one", value: "eins" },
      undefined,
      undefined,
      { key: "two", value: "zwei" },
      undefined,
      undefined,
      { key: "three", value: "drei" },
      undefined,
      { key: "four", value: "vier" },
    ];

    let spanish = [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      { key: "five", value: "cinco" },
      undefined,
      { key: "six", value: "seis" },
    ];

    let joinedArray = leftJoin(german, spanish);

    expect(joinedArray).toEqual([
      { key: "one", values: ["eins", null] },
      { key: "two", values: ["zwei", null] },
      { key: "three", values: ["drei", null] },
      { key: "four", values: ["vier", null] },
    ]);
  });
});
