import { ObjectType, Field, Float } from 'type-graphql';

@ObjectType()
export class PayloadOrbitParams {
  @Field(() => Float, { nullable: true })
  apoapsis_km: number;

  @Field(() => Float, { nullable: true })
  arg_of_pericenter: number;

  @Field(() => Float, { nullable: true })
  eccentricity: number;

  @Field(() => Float, { nullable: true })
  epoch: Date;

  @Field(() => Float, { nullable: true })
  inclination_deg: number;

  @Field(() => Float, { nullable: true })
  lifespan_years: number;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field(() => Float, { nullable: true })
  mean_anomaly: number;

  @Field(() => Float, { nullable: true })
  mean_motion: number;

  @Field(() => Float, { nullable: true })
  periapsis_km: number;

  @Field(() => Float, { nullable: true })
  period_min: number;

  @Field(() => Float, { nullable: true })
  raan: number;

  @Field({ nullable: true })
  reference_system: string;

  @Field({ nullable: true })
  regime: string;

  @Field(() => Float, { nullable: true })
  semi_major_axis_km: number;
}
