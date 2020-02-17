import { ObjectType, Field, Float, Int } from 'type-graphql';

@ObjectType()
export class Roadster {
  @Field(() => Float, { nullable: true })
  apoapsis_au: number;

  @Field({ nullable: true })
  details: string;

  @Field(() => Float, { nullable: true })
  earth_distance_km: number;

  @Field(() => Float, { nullable: true })
  earth_distance_mi: number;

  @Field(() => Float, { nullable: true })
  eccentricity: number;

  @Field(() => Float, { nullable: true })
  epoch_jd: number;

  @Field(() => Float, { nullable: true })
  inclination: number;

  @Field({ nullable: true })
  launch_date_unix: Date;

  @Field({ nullable: true })
  launch_date_utc: Date;

  @Field(() => Int, { nullable: true })
  launch_mass_kg: number;

  @Field(() => Int, { nullable: true })
  launch_mass_lbs: number;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field(() => Float, { nullable: true })
  mars_distance_km: number;

  @Field(() => Float, { nullable: true })
  mars_distance_mi: number;

  @Field({ nullable: true })
  name: string;

  @Field(() => Int, { nullable: true })
  norad_id: number;

  @Field(() => Float, { nullable: true })
  orbit_type: number;

  @Field(() => Float, { nullable: true })
  periapsis_arg: number;

  @Field(() => Float, { nullable: true })
  periapsis_au: number;

  @Field(() => Float, { nullable: true })
  period_days: number;

  @Field(() => Float, { nullable: true })
  semi_major_axis_au: number;

  @Field(() => Float, { nullable: true })
  speed_kph: number;

  @Field(() => Float, { nullable: true })
  speed_mph: number;

  @Field({ nullable: true })
  wikipedia: string;
}
