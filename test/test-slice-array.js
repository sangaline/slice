import assert from 'assert';

import { SliceArray } from '../src/';


describe('SliceArray', () => {
  it('should return true for Array.isArray()', () => {
    const sliceArray = new SliceArray();
    assert(Array.isArray(sliceArray));
  });

  it('should be identifiable using instanceof', () => {
    const sliceArray = new SliceArray();
    assert(sliceArray instanceof SliceArray);
  });

  it('should support initialization without the new keyword', () => {
    const sliceArray = SliceArray(1, 2, 3);
    assert(sliceArray.length === 3);
    assert(sliceArray[-1] === 3);
  });

  it('should support initialization with SliceArray.from()', () => {
    const sliceArray = SliceArray.from([1, 2]);
    assert(sliceArray.length === 2);
  });

  it('should return a slice arrays when using map()', () => {
    const mapped = SliceArray(0, 1, 2, 3).map(i => 2 * i);
    assert(mapped[-1] === 6);
  });

  it('should return a slice arrays when using slice()', () => {
    const sliced = SliceArray(0, 1, 2, 3).slice(-2);
    assert.deepEqual(sliced[[,,-1]], [3, 2]);
  });

  it('should reverse an array', () => {
    const input = new SliceArray(1, 2, 3, 4);
    const expectedOutput = [4, 3, 2, 1];
    const output = input[[,,-1]];
    assert.deepStrictEqual(output, expectedOutput);
  });

  it('should extract the even elements from an array', () => {
    const input = new SliceArray(0, 1, 2, 3, 4);
    const expectedOutput = [0, 2, 4];
    const output = input[[,,2]];
    assert.deepStrictEqual(output, expectedOutput);
  });

  it('should extract the odd elements from an array', () => {
    const input = new SliceArray(0, 1, 2, 3, 4);
    const expectedOutput = [1, 3];
    const output = input[[1,,2]];
    assert.deepStrictEqual(output, expectedOutput);
  });
});
