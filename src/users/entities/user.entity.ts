import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  username: string;
  email: string;
  age: number;
}
