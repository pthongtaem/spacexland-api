import { ObjectType, Field } from 'type-graphql';
import { Distance } from '../../global/Distance';

@ObjectType()
export class RocketSecondStagePayloadCompositeFairing {
  @Field(() => Distance, { nullable: true })
  height: Distance;

  @Field(() => Distance, { nullable: true })
  diameter: Distance;
}
