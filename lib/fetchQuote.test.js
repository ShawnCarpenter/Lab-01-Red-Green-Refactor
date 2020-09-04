const { fetchQuote } = require('./fetchQuote');

describe('fetchQuote should fetch a random quote from the futerama api', () => {
  it('returns a random quote from the API', async() => {
    const result = await fetchQuote();
    const expected = {
      character:expect.any(String),
      quote: expect.any(String),
      image: expect.any(String)
    };
    expect(result)
      .toEqual(expected);
  });
});
