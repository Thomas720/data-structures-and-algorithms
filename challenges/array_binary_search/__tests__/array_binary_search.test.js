'use strict';
	

	const binarySearch = require('../array-binary-search.js');
	

	
	

	const sorttedArray = [2, 2, 3, 3, 5, 6, 7, 8, 10, 12, 34, 36,38,41,43,45,46,404]
	

	const givenvalue = [6];
	

	
	

	describe('testing arrayBinarySearch function', () => {
	  
	  it('4: does not exist', () => {
	    expect(binarySearch(givenvalue, 4)).toStrictEqual(-1);
	  });
	

	  it('target exists number', () => {
	    expect(binarySearch(sorttedArray, 5)).toStrictEqual(5);
	  });
	

	  it(' target un existing number', () => {
	    expect(binarySearch(sorttedArray, 444)).toStrictEqual(-1);
	  });
	

	  it('main array, target exists', () => {
	    expect(binarySearch(sorttedArray, 87)).toStrictEqual(-1);
	  });
	

	  it('main array, value does not exists', () => {
	    expect(binarySearch(sorttedArray, 68)).toStrictEqual(-1);
	  });
	
	

	  it('value array, target does not exists', () => {
	    expect(binarySearch(sorttedArray, 10)).toStrictEqual(-1);
	  });
	

	

	});
