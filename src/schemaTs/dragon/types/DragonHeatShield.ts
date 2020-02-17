import { ObjectType, Field, Int, Float } from 'type-graphql';

@ObjectType()
export class DragonHeatShield {
  @Field({ nullable: true })
  material?: string;

  @Field(() => Float, { nullable: true })
  size_meters?: number;

  @Field(() => Int, { nullable: true })
  temp_degrees?: number;
}
