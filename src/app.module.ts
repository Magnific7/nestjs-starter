import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/services/users/users.service';

@Module({
  imports: [UsersModule],
  providers: [UsersService],
})
export class AppModule {}
