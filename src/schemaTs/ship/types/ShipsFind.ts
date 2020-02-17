import { InputType, Field, ID, Int, Float } from 'type-graphql';

@InputType()
export class ShipsFind {
  @Field(() => ID, { nullable: true })
  id: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  model: string;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  role: string;

  @Field(() => Boolean, { nullable: true })
  active: boolean;

  @Field(() => Int, { nullable: true })
  imo: number;

  @Field(() => Int, { nullable: true })
  mmsi: number;

  @Field(() => Int, { nullable: true })
  abs: number;

  @Field(() => Int, { nullable: true })
  class: number;

  @Field(() => Int, { nullable: true })
  weight_lbs: number;

  @Field(() => Int, { nullable: true })
  weight_kg: number;

  @Field(() => Int, { nullable: true })
  year_built: number;

  @Field({ nullable: true })
  home_port: string;

  @Field({ nullable: true })
  status: string;

  @Field(() => Int, { nullable: true })
  speed_kn: number;

  @Field(() => Int, { nullable: true })
  course_deg: number;

  @Field(() => Float, { nullable: true })
  latitude: number;

  @Field(() => Float, { nullable: true })
  longitude: number;

  @Field(() => Int, { nullable: true })
  successful_landings: number;

  @Field(() => Int, { nullable: true })
  attempted_landings: number;

  @Field({ nullable: true })
  mission: string;
}
