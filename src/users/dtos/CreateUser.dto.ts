import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsNotEmpty, IsEmail, isNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  age: number;
}
