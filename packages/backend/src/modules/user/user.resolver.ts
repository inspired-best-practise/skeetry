import { Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserEntity } from './user.decorator';

@Resolver(() => User)
export class UserResolver {
  constructor(private prisma: PrismaService) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }
}
