import { ObjectType, Field, Int } from 'type-graphql';
import { Payload } from '../../payload/types/Payload';

@ObjectType()
export class LaunchRocketSecondStage {
  @Field(() => Int, { nullable: true })
  block: number;

  @Field(() => [Payload], { nullable: 'itemsAndList' })
  payloads: Payload[];
}
