import counter from './UI.counter.js';

describe('Count movies displayed', () => {
  test('Empty array', () => {
    const arr = [];
    expect(counter(arr)).toBe(0);
  });
  test('Expect to get 4 movies back', () => {
    const movies = [{ item_id: '589' }, { item_id: '4562' }, { item_id: '139' }, { item_id: '748' }];
    expect(counter(movies)).toBe(4);
  });
});