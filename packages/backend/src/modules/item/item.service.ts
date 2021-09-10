import { countries } from './../prisma/countries';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';
import { User } from '.prisma/client';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  // create(createItemInput: CreateItemInput) {
  //   return 'This action adds a new item';
  // }

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
