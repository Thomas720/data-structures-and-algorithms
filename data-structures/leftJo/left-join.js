"use strict";

function leftJoin(left, right) {
  let joinedArray = [];

  for (let i = 0; i < left.length; i++) {
    if (left[i]) {
      let leftCurrent = left[i];

      while (leftCurrent) {
        if (right[i]) {
          let rightCurrent = right[i];

          let noMatch = true;

          while (rightCurrent) {
            if (leftCurrent.key === rightCurrent.key) {
              joinedArray.push({
                key: leftCurrent.key,
                values: [leftCurrent.value, rightCurrent.value],
              });
              noMatch = false;
            }
            rightCurrent = rightCurrent.next;
          }

          if (noMatch) {
            joinedArray.push({
              key: leftCurrent.key,
              values: [leftCurrent.value, null],
            });
          }
        } else {
          joinedArray.push({
            key: leftCurrent.key,
            values: [leftCurrent.value, null],
          });
        }
        leftCurrent = leftCurrent.next;
      }
    }
  }

  return joinedArray;
}

module.exports = leftJoin;
