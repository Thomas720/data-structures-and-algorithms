// "use strict";

// let array = [];

// let size = parseInt(process.argv.slice(2));

// for (let i = 0; i < size; i++) {
//   array.push(Math.floor(Math.random() * Math.floor(100)));
// }

// function insertionSort(arr) {
//   let i = 0;

//   while (i < arr.length) {
//     let j = i;

//     while (j > 0 && arr[j - 1] > arr[j]) {
//       //swap
//       let temp = arr[j - 1];
//       arr[j - 1] = arr[j];
//       arr[j] = temp;
//       j--;
//     }

//     i++;
//   }
// }

// module.exports = insertionSort;

"use strict";

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
}

module.exports = insertionSort;
