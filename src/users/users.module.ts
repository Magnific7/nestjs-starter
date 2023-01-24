import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { AnotherMiddlewareMiddleware } from './middlewares/another-middleware/another-middleware.middleware';
import { ExamplesMiddleware } from './middlewares/examples/examples.middleware';
import { UsersService } from './services/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      // .apply(ExamplesMiddleware)
      // .forRoutes({
      //   path: 'users/fetch',
      //   method: RequestMethod.GET,
      // })
      .apply(AnotherMiddlewareMiddleware)
      .forRoutes({
        path: 'users/create',
        method: RequestMethod.POST,
      });
  }
}
