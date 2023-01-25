import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { CreateUserType } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  @InjectRepository(User)
  private readonly userRepository: Repository<User>;

  private fakeUsers = [
    { username: 'mag', email: 'here@kg' },
    { username: 'user2', email: 'heretwo@kg' },
    { username: 'mag', email: 'heretwo@kg' },
    { username: 'mag', email: 'heretwo@kg' },
    { username: 'user2', email: 'heretwo@kg' },
  ];
  fetchUsers(name?: string) {
    if (name) {
      return this.fakeUsers.filter((user) => user.username === name);
    }
    return this.fakeUsers;
  }
  createUserAD(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }

  createUser(userDetails: CreateUserType) {
    {
      // const newUser = new User ;
      // console.log('userDetails', userDetails);
      const newUser = Object.assign(new User(), userDetails);
      return this.userRepository.save(newUser);
    }
  }

  fetchUserId(id: number) {
    return id;
  }
}
