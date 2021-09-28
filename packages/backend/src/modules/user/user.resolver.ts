import { StorageService } from './../storage/storage.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { PrismaService } from '../prisma/prisma.service';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { UserEntity } from './user.decorator';
import { UserService } from './user.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';
import { v4 as uuidv4 } from 'uuid';
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly user: UserService,
    private prisma: PrismaService,
    private storage: StorageService,
  ) {}

  @UseGuards(GqlAuthGuard)
  @Query(() => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }

  @UseGuards(GqlAuthGuard)
  @Mutation((returns) => Boolean)
  async uploadPhoto(
    @UserEntity() user: User,
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<boolean> {
    const ext = file.filename.match(/\.[a-z]+$/);
    const filename = `${uuidv4()}${ext}`;
    const url = await this.storage.upload({ ...file, filename });
    return await this.user.uploadPhoto(user, url);
  }
}
