const { one, two } = require('.');

describe('Tests', () => {
  test('Random test', () => {
    expect(one + two).toEqual(3);
  });
});
