import assert from 'assert';

import { SliceString } from '../src/';


describe('SliceString', () => {
  it('should be identifiable using instanceof', () => {
    const sliceString = new SliceString();
    assert(sliceString instanceof SliceString);
  });

  it('should support initialization without the new keyword', () => {
    const sliceString = SliceString('hello');
    assert(sliceString == 'hello');
  });

  it('should reverse a string', () => {
    const input = new SliceString('hello');
    const expectedOutput = 'olleh';
    const output = input[[,,-1]];
    assert.deepStrictEqual(output, expectedOutput);
  });

  it('should extract the even characters from a string', () => {
    const input = new SliceString('hello');
    const expectedOutput = 'hlo';
    const output = input[[,,2]];
    assert.deepStrictEqual(output, expectedOutput);
  });

  it('should extract the odd elements from an array', () => {
    const input = new SliceString('hello');
    const expectedOutput = 'el';
    const output = input[[1,,2]];
    assert.deepStrictEqual(output, expectedOutput);
  });
});