import { AnotherMiddlewareMiddleware } from './another-middleware.middleware';

describe('AnotherMiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new AnotherMiddlewareMiddleware()).toBeDefined();
  });
});
