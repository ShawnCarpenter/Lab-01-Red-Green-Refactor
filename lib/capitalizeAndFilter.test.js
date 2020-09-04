const { capitalizeAndFilter } = require('./capitalizeAndFilter');

describe('capitalizeAndFilter', () => {
  it('takes an array of strings and returns the array with the first letter of each item capitalized and all items that start with f filtered out', () => {
    const arr = ['first', 'second', 'another', 'fourth', 'fifth', 'new'];
    const newArr  = capitalizeAndFilter(arr);

    expect(newArr)
      .toEqual(['SECOND', 'ANOTHER', 'NEW']);
  });
});