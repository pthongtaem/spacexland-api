import { ObjectType, Field, Int, ID, Float } from 'type-graphql';
import { Volume } from '../global/Volume';

@ObjectType()
export class DragonPressurizedCapsule {
  @Field(() => Volume, { nullable: true })
  payload_volume?: Volume;
}
