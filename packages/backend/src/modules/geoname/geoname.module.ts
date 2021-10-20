import { Module } from '@nestjs/common';
import { GeonameService } from './geoname.service';
import { GeonameResolver } from './geoname.resolver';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GeonameResolver, GeonameService],
})
export class GeonameModule {}
