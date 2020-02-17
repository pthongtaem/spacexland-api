import { ObjectType, Field } from 'type-graphql';
import { Result } from '../../global/Result';
import { Rocket } from './Rocket';

@ObjectType()
export class RocketsResult {
  @Field(() => Result, { nullable: true })
  result: Result;

  @Field(() => [Rocket], { nullable: 'itemsAndList' })
  data: Rocket[];
}
