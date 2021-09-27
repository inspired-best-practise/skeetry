import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserEntity } from './user.decorator';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly user: UserService,
    private prisma: PrismaService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation(() => User)
  updateAvatar(
    @UserEntity() user: User,
    @Args('base64', { nullable: true }) base64: string,
    @Args('remove', { nullable: true }) remove: boolean,
  ) {
    return this.user.updateAvatar(user, base64, remove);
  }
}
