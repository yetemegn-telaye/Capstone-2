const { countComments } = require('./commentCounter.js');

describe('Count comments of a movie', () => {
  test('No comments', () => {
    const arr = [];
    expect(countComments(arr)).toBe(0);
  });
  test('Expect to get 2 comments back', () => {
    const comments = [{
      creation_date: '2022-10-26',
      username: 'tati',
      comment: 'message',
    }, {
      creation_date: '2022-10-26',
      comment: 'great movie',
      username: 'tati',
    }];
    expect(countComments(comments)).toBe(2);
  });
});