import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'mag', email: 'here@kg' },
    { username: 'user2', email: 'heretwo@kg' },
    { username: 'mag', email: 'heretwo@kg' },
    { username: 'mag', email: 'heretwo@kg' },
    { username: 'user2', email: 'heretwo@kg' }

  ];
  fetchUsers(name?: string) {
    if (name) {
      return this.fakeUsers.filter((user) => user.username === name);
    }
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return userDetails;
  }
  fetchUserId(id: number) {
    return id;
  }
}
