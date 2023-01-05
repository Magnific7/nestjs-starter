import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common/pipes';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @Get('fetch')
  getUsers() {
    return this.UsersService.fetchUsers();
  }

  @Get('fetch/posts')
  getUsersPosts() {
    return [
      {
        user: 'name',
        name: 'email',
        posts: [
          {
            id: 1,
            title: 'hi',
          },
          {
            id: 2,
            title: 'post 2',
          },
        ],
      },
    ];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision());
    return this.UsersService.createUser(userData);
  }

  @Get(':id/:postId')
  getUserById(
    @Param('id', ParseIntPipe) id: number,

    @Param('postId') postId: string,
  ) {
    console.log(id, postId);
    const user = this.UsersService.fetchUserId(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
