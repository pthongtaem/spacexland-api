import { ObjectType, Field, Int } from 'type-graphql';
import { Force } from '../../global/Force';

@ObjectType()
export class DragonThrust {
  @Field(() => Int, { nullable: true })
  amount?: number;

  @Field({ nullable: true })
  fuel_1?: string;

  @Field({ nullable: true })
  fuel_2?: string;

  @Field(() => Int, { nullable: true })
  pods?: number;

  @Field(() => Force, { nullable: true })
  thrust?: Force;

  @Field({ nullable: true })
  type?: string;
}
