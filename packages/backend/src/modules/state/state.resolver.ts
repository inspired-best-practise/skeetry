import { Resolver } from '@nestjs/graphql';
import { StateService } from './state.service';
import { State } from './models/state.model';

@Resolver(() => State)
export class StateResolver {
  constructor(private readonly state: StateService) {}
}
