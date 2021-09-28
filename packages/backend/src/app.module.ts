import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { GraphqlConfig } from './config/config.interface';
import { AuthModule } from './modules/auth/auth.module';
import { CityModule } from './modules/city/city.module';
import { TagModule } from './modules/tag/tag.module';
import { StoryModule } from './modules/story/story.module';
import { CountryModule } from './modules/country/country.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        // TODO: add introspection for production
        return {
          uploads: false,
          installSubscriptionHandlers:
            graphqlConfig.installSubscriptionHandlers,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile: graphqlConfig.autoSchemaFile || './schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    CityModule,
    TagModule,
    StoryModule,
    CountryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
