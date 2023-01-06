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
  UseGuards,
} from '@nestjs/common';
import { ParseBoolPipe, ParseIntPipe } from '@nestjs/common/pipes';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger/dist';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { User } from 'src/users/entities/user.entity';
import { AuthGuardGuard } from 'src/users/guards/auth-guard/auth-guard.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private UsersService: UsersService) {}

  @UseGuards(AuthGuardGuard)
  @ApiQuery({ name: 'name', required: false })
  @Get('fetch')
  getUsers(@Query('name') name: string) {
    return this.UsersService.fetchUsers(name);
  }

  @ApiOkResponse({ type: User, isArray: true })
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

  @ApiCreatedResponse({ type: User })
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
