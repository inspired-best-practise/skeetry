import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PrismaModule } from '../prisma/prisma.module';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, HttpModule],
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [],
})
export class UserModule {}
