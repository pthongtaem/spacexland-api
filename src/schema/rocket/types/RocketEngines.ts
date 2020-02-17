import { ObjectType, Field, Int, Float } from 'type-graphql';
import { Force } from '../../global/Force';

@ObjectType()
export class RocketEngines {
  @Field(() => Int, { nullable: true })
  number: number;

  @Field({ nullable: true })
  type: string;

  @Field({ nullable: true })
  version: string;

  @Field({ nullable: true })
  layout: string;

  @Field({ nullable: true })
  engine_loss_max: string;

  @Field({ nullable: true })
  propellant_1: string;

  @Field({ nullable: true })
  propellant_2: string;

  @Field(() => Force, { nullable: true })
  thrust_sea_level: Force;

  @Field(() => Force, { nullable: true })
  thrust_vacuum: Force;

  @Field(() => Float, { nullable: true })
  thrust_to_weight: number;
}
