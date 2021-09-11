import { Module } from '@nestjs/common';
import { ItemTagService } from './item-tag.service';
import { ItemTagResolver } from './item-tag.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [PrismaModule, HttpModule],
  providers: [ItemTagResolver, ItemTagService],
})
export class ItemTagModule {}
