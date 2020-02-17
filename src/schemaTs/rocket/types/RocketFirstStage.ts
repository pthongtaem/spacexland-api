import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Force } from '../../global/Force';

@ObjectType()
export class RocketFirstStage {
  @Field(() => Int, { nullable: true })
  burn_time_sec: number;

  @Field(() => Int, { nullable: true })
  engines: number;

  @Field(() => Float, { nullable: true })
  fuel_amount_tons: number;

  @Field(() => Boolean, { nullable: true })
  reusable: boolean;

  @Field(() => Force, { nullable: true })
  thrust_sea_level: Force;

  @Field(() => Force, { nullable: true })
  thrust_vacuum: Force;
}
