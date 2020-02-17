import { ObjectType, Field } from 'type-graphql';
import { RocketSecondStagePayloadCompositeFairing } from './RocketSecondStagePayloadCompositeFairing';

@ObjectType()
export class RocketSecondStagePayloads {
  @Field({ nullable: true })
  option_1: string;

  @Field(() => RocketSecondStagePayloadCompositeFairing, { nullable: true })
  composite_fairing: RocketSecondStagePayloadCompositeFairing;
}
