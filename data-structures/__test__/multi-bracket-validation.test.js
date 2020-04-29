
'use strict';

const validation = require('../multiBracketValidation/multi-bracket-validation.js')

describe('CHECK ALL BRACKETS AND RETURN TRUE IF THEY MATCHED', () => {
  test('TRUE CONDDITION', () => {
    expect(validation('({[]})')).toEqual(true);
    expect(validation('({[][]})')).toEqual(true);
    expect(validation('({[()()]})')).toEqual(true);
  });

  test('CHECK THE GIVEN AND RETURN FALSE IF NOT MATCHED', () => {
    expect(validation('({[})')).toEqual(false);
    expect(validation('{[}]')).toEqual(false);
    expect(validation('({[)')).toEqual(false);
  });
});