# Quick Sort

![Merging the Arrays](./assets/qs.png)

- let's say we have a given array of

- [4,7,1,3,6,8,3,4,6]

- Its gone take the last numer in the array and use it as Pivot
- > 6

- And Create two other arrays to split the original array

> [] left array > [] right array

- any number less than the pivit statys in the left and anything greater than goes to right Array.

- The pivot "6" stays outside of the array

- > letf array [4,1,3,6,3,4] -> right array [7,8]

- The next step "4" and "8" will become the pivit from both arrays

- > left array [4,1,3,3] -> right array [6]

- The sorting will continue till we get the last number and sorted all.
