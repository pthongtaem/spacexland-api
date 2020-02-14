import { ObjectType, Field, ID, Int, Float } from 'type-graphql';

@ObjectType()
export class Force {
  @Field(() => Float, { nullable: true })
  kN?: number;

  @Field(() => Float, { nullable: true })
  lbf?: number;
}
