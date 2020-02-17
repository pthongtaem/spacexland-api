import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class RocketPayloadWeight {
  @Field({ nullable: true })
  id: string;

  @Field(() => Int, { nullable: true })
  kg: number;

  @Field(() => Int, { nullable: true })
  lb: number;

  @Field({ nullable: true })
  name: string;
}
