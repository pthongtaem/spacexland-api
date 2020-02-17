import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class ShipMission {
  @Field({ nullable: true })
  flight: string;

  @Field({ nullable: true })
  name: string;
}
