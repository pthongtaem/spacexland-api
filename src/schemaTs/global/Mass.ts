import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
export class Mass {
  @Field(() => Int, { nullable: true })
  kg?: number;

  @Field(() => Int, { nullable: true })
  lb?: number;
}
