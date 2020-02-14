import { ObjectType, Field } from 'type-graphql';
import { Result } from '../global/Result';
import { History } from './History';

@ObjectType()
export class HistoriesResult {
  @Field(() => Result, { nullable: true })
  result: Result;

  @Field(() => [History], { nullable: true })
  data: History[];
}
