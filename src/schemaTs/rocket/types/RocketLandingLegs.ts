import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
export class RocketLandingLegs {
  @Field(() => Int, { nullable: true })
  number: number;

  @Field({ nullable: true })
  material: string;
}
