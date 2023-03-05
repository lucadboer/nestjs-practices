import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './user-repository';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, bio: string): Promise<void> {
    const alreadyUsernameExists = await this.prisma.users.findFirst({
      where: {
        name,
      },
    });

    if (alreadyUsernameExists) {
      return console.log('anohter user with same name already exists');
    }

    await this.prisma.users.create({
      data: {
        name,
        bio,
      },
    });
  }

  async update(nameToUpdate: string, newName: string): Promise<void> {
    await this.prisma.users.update({
      where: {
        name: nameToUpdate,
      },
      data: {
        name: newName,
      },
    });
  }

  async remove(nameToRemove: string): Promise<void> {
    await this.prisma.users.delete({
      where: {
        name: nameToRemove,
      },
    });
  }
}
