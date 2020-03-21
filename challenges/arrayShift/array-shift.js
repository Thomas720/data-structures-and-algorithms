'use strict';

function arrayShift() {
    let arr = [1,2,3,4,5,6,7,8];
    let index = Math.round((arr.lenght -1) / 2);
    console.log(index);
    let newElement = 9;

    for(let i = arr.length -1; i > index; i--) {
        console.log(arr[i])
        arr[i] = arr[i - 1];
    }

    arr[index] = newElement;
    console.log(arr)
}
arrayShift();

module.exports = (arrayShift);

