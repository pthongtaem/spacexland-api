import { ObjectType, Field, Int, Float } from 'type-graphql';
import { ShipMission } from './ShipMission';
import { ShipLocation } from './ShipLocation';

@ObjectType()
export class Ship {
  @Field(() => Int, { nullable: true })
  abs: number;

  @Field(() => Boolean, { nullable: true })
  active: boolean;

  @Field(() => Int, { nullable: true })
  attempted_landings: number;

  @Field(() => Int, { nullable: true })
  class: number;

  @Field(() => Int, { nullable: true })
  course_deg: number;

  @Field({ nullable: true })
  home_port: string;

  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  image: string;

  @Field(() => Int, { nullable: true })
  imo: number;

  @Field(() => [ShipMission], { nullable: 'itemsAndList' })
  missions: ShipMission[];

  @Field(() => Int, { nullable: true })
  mmsi: number;

  @Field({ nullable: true })
  model: string;

  @Field({ nullable: true })
  name: string;

  @Field(() => ShipLocation, { nullable: true })
  position: ShipLocation;

  @Field(() => [String], { nullable: 'itemsAndList' })
  roles: string[];

  @Field(() => Float, { nullable: true })
  speed_kn: number;

  @Field({ nullable: true })
  status: string;

  @Field(() => Int, { nullable: true })
  successful_landings: number;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  url: string;

  @Field(() => Int, { nullable: true })
  weight_kg: number;

  @Field(() => Int, { nullable: true })
  weight_lbs: number;

  @Field(() => Int, { nullable: true })
  year_built: number;
}
