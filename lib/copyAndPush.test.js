const { copyAndPush } = require('./copyAndPush');

describe('copyAndPush', () => {
  it('takes an array and an item and returns a new array with the item added to the end', () => {
    const arr = [1, 2, 3];
    const newArr  = copyAndPush(arr, 4);

    expect(newArr)
      .toEqual([1, 2, 3, 4]);
  });
});

