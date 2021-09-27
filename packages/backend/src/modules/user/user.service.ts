import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  updateAvatar(user: User, base64: string, remove: boolean) {
    return this.prisma.user.update({
      data: { avatar: remove ? '' : base64 },
      where: {
        id: user.id,
      },
    });
  }
}
