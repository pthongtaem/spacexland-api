import { ObjectType, Field, Int, Float } from 'type-graphql';
import { PayloadOrbitParams } from './PayloadOrbitParams';

@ObjectType()
export class Payload {
  @Field(() => [String], { nullable: 'itemsAndList' })
  customers: string[];

  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  manufacturer: string;

  @Field({ nullable: true })
  nationality: string;

  @Field(() => [Int], { nullable: 'itemsAndList' })
  norad_id: number[];

  @Field(() => PayloadOrbitParams, { nullable: true })
  orbit_params: PayloadOrbitParams;

  @Field({ nullable: true })
  orbit: string;

  @Field(() => Float, { nullable: true })
  payload_mass_kg: number;

  @Field(() => Float, { nullable: true })
  payload_mass_lbs: number;

  @Field({ nullable: true })
  payload_type: string;

  @Field(() => Boolean, { nullable: true })
  reused: boolean;
}
