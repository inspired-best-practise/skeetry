import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [],
  providers: [UserResolver],
  exports: [],
})
export class UserModule {}
