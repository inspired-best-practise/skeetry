import { Module } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryResolver } from './country.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CountryResolver, CountryService],
})
export class CountryModule {}
