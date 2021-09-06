import { countries } from './../prisma/countries';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemInput } from './dto/create-item.input';
import { UpdateItemInput } from './dto/update-item.input';

@Injectable()
export class ItemService {
  constructor(private prisma: PrismaService) {}

  create(createItemInput: CreateItemInput) {
    return 'This action adds a new item';
  }

  async findAll() {
    const items = await this.prisma.item.findMany();

    return items;
  }

  async findAllCountries() {
    const countries = await this.prisma.item.findMany({
      where: {
        type: 'COUNTRY',
      },
    });

    return countries;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemInput: UpdateItemInput) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
