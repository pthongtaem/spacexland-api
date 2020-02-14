import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class Result {
  @Field(() => Int, { nullable: true })
  totalCount: number;
}
