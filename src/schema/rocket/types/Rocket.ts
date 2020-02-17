import { ObjectType, Field, Int, ID } from 'type-graphql';
import { Distance } from '../../global/Distance';
import { RocketEngines } from './RocketEngines';
import { RocketFirstStage } from './RocketFirstStage';
import { RocketLandingLegs } from './RocketLandingLegs';
import { Mass } from '../../global/Mass';
import { RocketPayloadWeight } from './RocketPayloadWeight';
import { RocketSecondStage } from './RocketSecondStage';

@ObjectType()
export class Rocket {
  @Field(() => Boolean, { nullable: true })
  active: boolean;

  @Field(() => Int, { nullable: true })
  boosters: number;

  @Field({ nullable: true })
  company: string;

  @Field(() => Int, { nullable: true })
  cost_per_launch: number;

  @Field({ nullable: true })
  country: string;

  @Field({ nullable: true })
  description: string;

  @Field(() => Distance, { nullable: true })
  diameter: Distance;

  @Field(() => RocketEngines, { nullable: true })
  engines: RocketEngines;

  @Field({ nullable: true })
  first_flight: Date;

  @Field(() => RocketFirstStage, { nullable: true })
  first_stage: RocketFirstStage;

  @Field(() => Distance, { nullable: true })
  height: Distance;

  @Field(() => ID, { nullable: true })
  id: string;

  @Field(() => RocketLandingLegs, { nullable: true })
  landing_legs: RocketLandingLegs;

  @Field(() => Mass, { nullable: true })
  mass: Mass;

  @Field({ nullable: true })
  name: string;

  @Field(() => [RocketPayloadWeight], { nullable: 'itemsAndList' })
  payload_weights: [RocketPayloadWeight];

  @Field(() => RocketSecondStage, { nullable: true })
  second_stage: RocketSecondStage;

  @Field(() => Int, { nullable: true })
  stages: number;

  @Field(() => Int, { nullable: true })
  success_rate_pct: number;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  wikipedia: string;
}
