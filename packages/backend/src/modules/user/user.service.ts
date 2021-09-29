import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async uploadPhoto(user: User, url: string): Promise<boolean> {
    if (!url) {
      return false;
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        avatar: url,
      },
    });

    return true;
  }

  async deletePhoto(user: User): Promise<boolean> {
    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        avatar: null,
      },
    });

    return true;
  }
}
