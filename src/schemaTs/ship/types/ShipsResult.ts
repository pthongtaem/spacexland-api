import { ObjectType, Field } from 'type-graphql';
import { Result } from '../../global/Result';
import { Ship } from './Ship';

@ObjectType()
export class ShipsResult {
  @Field(() => Result, { nullable: true })
  result: Result;

  @Field(() => [Ship], { nullable: 'itemsAndList' })
  data: Ship[];
}
