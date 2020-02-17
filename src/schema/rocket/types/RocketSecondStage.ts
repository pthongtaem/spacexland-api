import { ObjectType, Field, Int, Float } from 'type-graphql';
import { RocketSecondStagePayloads } from './RocketSecondStagePayloads';
import { Force } from '../../global/Force';

@ObjectType()
export class RocketSecondStage {
  @Field(() => Int, { nullable: true })
  burn_time_sec: number;

  @Field(() => Int, { nullable: true })
  engines: number;

  @Field(() => Float, { nullable: true })
  fuel_amount_tons: number;

  @Field(() => RocketSecondStagePayloads, { nullable: true })
  payloads: RocketSecondStagePayloads;

  @Field(() => Force, { nullable: true })
  thrust: Force;
}
