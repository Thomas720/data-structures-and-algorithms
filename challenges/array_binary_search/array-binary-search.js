'use strict';


 binarysearch = (arr, value) => {
  
  let high = arr.lenght -1;
  let low = 0;
  let mid = 0; 


  while(low <= high) {
    mid = Math.floor((high + low) /2)
    //middle == value being searched

    if (arr[mid] == value) {
      //return value
      return arr[mid];
    }else if(value > arr[mid]){
      //movethe low up one
      low = mid + 1;

    }else {
      //move the high down one
      high = mid -1;
    }
  }

  return -1;

}



module.exports = binarysearch;

