import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('fetch')
  getUsers() {
    return { username: 'mag', email: 'here@kg' };
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
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return userData;
  }
}
