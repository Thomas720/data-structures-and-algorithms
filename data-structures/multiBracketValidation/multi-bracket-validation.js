'use strict';

const Validation = (bracket) => {
  const checkBrackets = [];


  //Make a loop for all openning brakets as needed and 
  //Push them to the empty array
  for (let i = 0; i < str.length; i++) {
    if (bracket[i] === '(' || bracket[i] === '{' || bracket[i] === '[') {
        checkBrackets.push(bracket[i]);
    }


 // If there is similar bracketes that match our need pop it from the array
    if ((bracket[i] === ')' && checkBrackets[checkBrackets.length - 1] === '(') 
    || (bracket[i] === '}' && checkBrackets[checkBrackets.length - 1] === '{')
    || (bracket[i] === ']' && checkBrackets[checkBrackets.length - 1] === '[')) 
    
    
    {
        checkBrackets.pop();
    } else 
    
// Check if thre is unmatch brackets and return false if not matched
    if ((bracket[i] === ')' && checkBrackets[checkBrackets.length - 1] !== '(') 
    || (bracket[i] === '}' && checkBrackets[checkBrackets.length - 1] !== '{')
    || (bracket[i] === ']' && checkBrackets[checkBrackets.length - 1] !== '[')) {
      return false;
    }
  }
  if (checkBrackets.length === 0) return true;
  return false;
};

module.exports = Validation