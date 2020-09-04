const { getName } = require('./getName.js');

describe('findName function', () => {
  it('returns the name property of an object', () => {
    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const spotName = getName(spot);

    expect(spotName)
      .toEqual('spot');
  });
});
