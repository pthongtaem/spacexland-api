import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType()
export class Distance {
  @Field(() => Float, { nullable: true })
  feet: number;

  @Field(() => Float, { nullable: true })
  meters: number;
}
