import { Injectable, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ItemTagService {
  constructor(private prisma: PrismaService) {}

  @UseGuards(GqlAuthGuard)
  async findAll() {
    const itemTags = await this.prisma.itemTag.findMany({
      include: {
        localizations: true,
      },
      where: {
        item: {
          some: {},
        },
      },
    });

    return itemTags;
  }
}
