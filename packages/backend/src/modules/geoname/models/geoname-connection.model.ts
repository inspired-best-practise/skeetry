import { ObjectType } from '@nestjs/graphql';
import PaginatedResponse from '../../common/pagination/pagination';
import { Geoname } from './geoname.model';

@ObjectType()
export class GeonameConnection extends PaginatedResponse(Geoname) {}
