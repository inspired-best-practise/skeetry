import { AddItemInput } from './dto/add-item.input';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../user/models/user.model';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  async addItem(user: User, input: AddItemInput) {
    const { id, type } = input;

    const item = await this.prisma.item.findUnique({
      include: {
        userWanted: true,
        userVisited: true,
      },
      where: {
        id,
      },
    });

    const alreadyWanted = item.userWanted.find((u) => u.id === user.id);
    const alreadyVisited = item.userVisited.find((u) => u.id === user.id);

    if (
      (type === 'WANT' && alreadyWanted) ||
      (type === 'VISITED' && alreadyVisited)
    ) {
      throw new Error('The element is already in the list');
    }

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data:
        type === 'WANT'
          ? {
              wantedCount: {
                increment: 1,
              },
              wanted: {
                connect: {
                  id: item.id,
                },
              },
            }
          : {
              visitedCount: {
                increment: 1,
              },
              visited: {
                connect: {
                  id: item.id,
                },
              },
            },
    });

    return item;
  }

  async findAll() {
    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
      },
    });

    return items;
  }

  async findWanted(user: User) {
    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
      },
      where: {
        userWanted: {
          some: {
            id: user.id,
          },
        },
      },
    });

    return items;
  }

  async findVisited(user: User) {
    const items = await this.prisma.item.findMany({
      include: {
        localizations: true,
      },
      where: {
        userVisited: {
          some: {
            id: user.id,
          },
        },
      },
    });

    return items;
  }

  async findAllCountries() {
    const countries = await this.prisma.item.findMany({
      include: {
        localizations: true,
      },
      where: {
        type: 'COUNTRY',
      },
    });

    return countries;
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} item`;
  // }

  // update(id: string, updateItemInput: UpdateItemInput) {
  //   return `This action updates a #${id} item`;
  // }

  // remove(id: string) {
  //   return `This action removes a #${id} item`;
  // }

  // async getLocalizations(id: string) {
  //   const localizations = await this.prisma.itemLocalization.findMany({
  //     where: {
  //       itemId: id,
  //     },
  //   });

  //   return localizations;
  // }
}
