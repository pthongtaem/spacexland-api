import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CoreMission {
  @Field({ nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  flight?: number;
}
