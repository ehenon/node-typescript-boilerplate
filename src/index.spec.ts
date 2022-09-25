import { hello } from './index';

describe('hello() function', () => {
  test('with parameter', () => {
    expect(hello('Jeffrey')).toEqual('Hello Jeffrey!');
  });

  test('without parameter', () => {
    expect(hello()).toEqual('Hello world!');
  });
});
