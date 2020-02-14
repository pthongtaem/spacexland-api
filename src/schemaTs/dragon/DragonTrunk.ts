import { ObjectType, Field } from 'type-graphql';
import { DragonTrunkCargo } from './DragonTrunkCargo';
import { Volume } from '../global/Volume';

@ObjectType()
export class DragonTrunk {
  @Field(() => DragonTrunkCargo, { nullable: true })
  cargo?: DragonTrunkCargo;

  @Field(() => Volume, { nullable: true })
  trunk_volume?: Volume;
}
