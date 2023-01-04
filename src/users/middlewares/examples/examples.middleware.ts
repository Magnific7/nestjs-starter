import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class ExamplesMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Example middleware');
    next();
  }
}
