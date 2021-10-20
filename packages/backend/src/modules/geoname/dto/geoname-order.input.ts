import { InputType, registerEnumType } from '@nestjs/graphql';
import { Order } from '../../common/order/order';

export enum GeonameOrderField {
  name = 'name',
  population = 'population',
}

registerEnumType(GeonameOrderField, {
  name: 'GeonameOrderField',
  description: 'Properties by which geoname connections can be ordered.',
});

@InputType()
export class GeonameOrder extends Order {
  field: GeonameOrderField;
}
