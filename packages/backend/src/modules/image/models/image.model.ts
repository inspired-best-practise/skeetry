import { Geoname } from './../../geoname/models/geoname.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../common/base.model';

@ObjectType()
export class Image extends BaseModel {
  @Field()
  urlRegular: string;

  @Field()
  urlSmall: string;

  @Field()
  urlThumb: string;

  @Field(() => [Geoname], { nullable: true })
  geoname?: Geoname[];
}
