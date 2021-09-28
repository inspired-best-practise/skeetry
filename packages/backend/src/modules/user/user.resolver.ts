import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserEntity } from './user.decorator';
import { UserService } from './user.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { createWriteStream } from 'fs';
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
  @Mutation(() => Boolean)
  async uploadPhoto(
    @UserEntity() user: User,
    @Args({ name: 'file', type: () => GraphQLUpload })
    { createReadStream, filename }: FileUpload,
  ): Promise<boolean> {
    return new Promise(async (resolve, reject) =>
      createReadStream()
        .pipe(createWriteStream(`./uploads/${filename}`))
        .on('finish', () => resolve(true))
        .on('error', () => reject(false)),
    );
  }
}
