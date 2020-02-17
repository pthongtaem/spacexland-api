import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType()
export class Force {
  @Field(() => Float, { nullable: true })
  kN?: number;

  @Field(() => Float, { nullable: true })
  lbf?: number;
}
