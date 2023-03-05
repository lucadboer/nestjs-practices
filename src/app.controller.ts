import { CreateUserBody, DeleteUserBody, UpdateUser } from './dtos/user-prisma';
import { Controller, Post, Body, Delete, Put } from '@nestjs/common';
import { UserRepository } from './repository/user-repository';

@Controller()
export class AppController {
  constructor(private userRepository: UserRepository) {}

  @Post('users')
  async createUser(@Body() body: CreateUserBody) {
    const { name, bio } = body;

    this.userRepository.create(name, bio);
  }

  @Put('users/update')
  async updateUser(@Body() body: UpdateUser) {
    const { nameToUpdate, newName } = body;

    this.userRepository.update(nameToUpdate, newName);
  }

  @Delete('users/delete')
  async deleteUser(@Body() body: DeleteUserBody) {
    const { nameToRemove } = body;

    this.userRepository.remove(nameToRemove);
  }
}
