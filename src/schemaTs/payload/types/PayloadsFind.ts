import { InputType, Field, Float, Int, ID } from 'type-graphql';

@InputType()
export class PayloadsFind {
  @Field(() => Float, { nullable: false })
  apoapsis_km: number;

  @Field({ nullable: false })
  customer: string;

  @Field(() => Float, { nullable: false })
  eccentricity: number;

  @Field({ nullable: false })
  epoch: Date;

  @Field(() => Float, { nullable: false })
  inclination_deg: number;

  @Field(() => Float, { nullable: false })
  lifespan_years: number;

  @Field(() => Float, { nullable: false })
  longitude: number;

  @Field({ nullable: false })
  manufacturer: string;

  @Field(() => Float, { nullable: false })
  mean_motion: number;

  @Field({ nullable: false })
  nationality: string;

  @Field(() => Int, { nullable: false })
  norad_id: number;

  @Field({ nullable: false })
  orbit: string;

  @Field(() => ID, { nullable: false })
  payload_id: string;

  @Field({ nullable: false })
  payload_type: string;

  @Field(() => Float, { nullable: false })
  periapsis_km: number;

  @Field(() => Float, { nullable: false })
  period_min: number;

  @Field(() => Float, { nullable: false })
  raan: number;

  @Field({ nullable: false })
  reference_system: string;

  @Field({ nullable: false })
  regime: string;

  @Field(() => Boolean, { nullable: false })
  reused: boolean;

  @Field(() => Float, { nullable: false })
  semi_major_axis_km: number;
}
