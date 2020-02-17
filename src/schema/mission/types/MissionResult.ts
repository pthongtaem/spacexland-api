import { ObjectType, Field } from 'type-graphql';
import { Result } from '../../global/Result';
import { Mission } from './Mission';

@ObjectType()
export class MissionResult {
  @Field(() => Result, { nullable: true })
  result: Result;

  @Field(() => [Mission], { nullable: true })
  data: Mission[];
}
