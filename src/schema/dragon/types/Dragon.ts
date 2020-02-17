import { ObjectType, Field, Int, ID, Float } from 'type-graphql';
import { Distance } from '../../global/Distance';
import { Mass } from '../../global/Mass';
import { DragonHeatShield } from './DragonHeatShield';
import { Volume } from '../../global/Volume';
import { DragonPressurizedCapsule } from './DragonPressurizedCapsule';
import { DragonThrust } from './DragonThrust';
import { DragonTrunk } from './DragonTrunk';

@ObjectType()
export class Dragon {
  @Field(() => Boolean, { nullable: true })
  active?: boolean;

  @Field(() => Int, { nullable: true })
  crew_capacity: number;

  @Field({ nullable: true })
  description?: string;

  @Field(() => Distance, { nullable: true })
  diameter?: Distance;

  @Field(() => Int, { nullable: true })
  dry_mass_kg?: number;

  @Field(() => Int, { nullable: true })
  dry_mass_lb?: number;

  @Field({ nullable: true })
  first_flight?: string;

  @Field(() => DragonHeatShield, { nullable: true })
  heat_shield?: DragonHeatShield;

  @Field(() => Distance, { nullable: true })
  height_w_trunk?: Distance;

  @Field(() => ID, { nullable: true })
  id?: string;

  @Field(() => Mass, { nullable: true })
  launch_payload_mass?: Mass;

  @Field(() => Volume, { nullable: true })
  launch_payload_vol?: Volume;

  @Field(() => ID, { nullable: true })
  name?: string;

  @Field(() => Int, { nullable: true })
  orbit_duration_yr?: number;

  @Field(() => DragonPressurizedCapsule, { nullable: true })
  pressurized_capsule?: DragonPressurizedCapsule;

  @Field(() => Mass, { nullable: true })
  return_payload_mass?: Mass;

  @Field(() => Volume, { nullable: true })
  return_payload_vol?: Volume;

  @Field(() => Float, { nullable: true })
  sidewall_angle_deg?: number;

  @Field(() => [DragonThrust], { nullable: 'itemsAndList' })
  thrusters?: DragonThrust[];

  @Field(() => DragonTrunk, { nullable: true })
  trunk?: DragonTrunk;

  @Field({ nullable: true })
  type?: string;

  @Field({ nullable: true })
  wikipedia?: string;
}
