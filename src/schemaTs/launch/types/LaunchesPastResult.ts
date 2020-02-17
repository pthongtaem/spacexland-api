import { ObjectType, Field } from 'type-graphql';
import { Result } from '../../global/Result';
import { Launch } from './Launch';

@ObjectType()
export class LaunchesPastResult {
  @Field(() => Result, { nullable: true })
  result: Result;

  @Field(() => [Launch], { nullable: 'itemsAndList' })
  data: Launch[];
}
