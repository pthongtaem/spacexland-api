import { ObjectType, Field, Int, ID, Float } from 'type-graphql';

@ObjectType()
export class DragonTrunkCargo {
  @Field(() => Int, { nullable: true })
  solar_array?: number;

  @Field(() => Boolean, { nullable: true })
  unpressurized_cargo?: boolean;
}
