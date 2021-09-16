import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CountryService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return `This action returns all country`;
  }

  findOne(id: number) {
    return `This action returns a #${id} country`;
  }

  // update(id: number, input: UpdateCountryInput) {
  //   return `This action updates a #${id} country`;
  // }
}
