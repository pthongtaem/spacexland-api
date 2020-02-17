import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType()
export class ShipLocation {
  @Field(() => Float, { nullable: true })
  latitude: number;

  @Field(() => Float, { nullable: true })
  longitude: number;
}
