import { ExamplesMiddleware } from './examples.middleware';

describe('ExamplesMiddleware', () => {
  it('should be defined', () => {
    expect(new ExamplesMiddleware()).toBeDefined();
  });
});
