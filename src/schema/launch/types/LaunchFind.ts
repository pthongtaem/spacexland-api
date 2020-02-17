import { InputType, Field, Int, ID, Float } from 'type-graphql';

@InputType()
export class LaunchFind {
  @Field(() => Float, { nullable: true })
  apoapsis_km: number;

  @Field(() => Int, { nullable: true })
  block: number;

  @Field({ nullable: true })
  cap_serial: string;

  @Field({ nullable: true })
  capsule_reuse: string;

  @Field(() => Int, { nullable: true })
  core_flight: number;

  @Field({ nullable: true })
  core_reuse: string;

  @Field({ nullable: true })
  core_serial: string;

  @Field({ nullable: true })
  customer: string;

  @Field(() => Float, { nullable: true })
  eccentricity: number;

  @Field({ nullable: true })
  end: Date;

  @Field({ nullable: true })
  epoch: Date;

  @Field({ nullable: true })
  fairings_recovered: string;

  @Field({ nullable: true })
  fairings_recovery_attempt: string;

  @Field({ nullable: true })
  fairings_reuse: string;

  @Field({ nullable: true })
  fairings_reused: string;

  @Field({ nullable: true })
  fairings_ship: string;

  @Field({ nullable: true })
  gridfins: string;

  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => Float, { nullable: true })
  inclination_deg: number;

  @Field({ nullable: true })
  land_success: string;

  @Field({ nullable: true })
  landing_intent: string;

  @Field({ nullable: true })
  landing_type: string;

  @Field({ nullable: true })
  landing_vehicle: string;

  @Field({ nullable: true })
  launch_date_local: Date;

  @Field({ nullable: true })
  launch_date_utc: Date;

  @Field({ nullable: true })
  launch_success: string;

  @Field({ nullable: true })
  launch_year: string;

  @Field({ nullable: true })
  legs: string;

  @Field(() => Float, { nullable: true })
  lifespan_years: number;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field({ nullable: true })
  manufacturer: string;

  @Field(() => Float, { nullable: true })
  mean_motion: number;

  @Field({ nullable: true })
  mission_id: string;

  @Field({ nullable: true })
  mission_name: string;

  @Field({ nullable: true })
  nationality: string;

  @Field(() => Int, { nullable: true })
  norad_id: number;

  @Field({ nullable: true })
  orbit: string;

  @Field({ nullable: true })
  payload_id: string;

  @Field({ nullable: true })
  payload_type: string;

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

  @Field({ nullable: true })
  reused: string;

  @Field({ nullable: true })
  rocket_id: string;

  @Field({ nullable: true })
  rocket_name: string;

  @Field({ nullable: true })
  rocket_type: string;

  @Field({ nullable: true })
  second_stage_block: string;

  @Field(() => Float, { nullable: true })
  semi_major_axis_km: number;

  @Field({ nullable: true })
  ship: string;

  @Field({ nullable: true })
  side_core1_reuse: string;

  @Field({ nullable: true })
  side_core2_reuse: string;

  @Field({ nullable: true })
  site_id: string;

  @Field({ nullable: true })
  site_name_long: string;

  @Field({ nullable: true })
  site_name: string;

  @Field({ nullable: true })
  start: Date;

  @Field({ nullable: true })
  tbd: string;

  @Field({ nullable: true })
  tentative_max_precision: string;

  @Field({ nullable: true })
  tentative: string;
}
