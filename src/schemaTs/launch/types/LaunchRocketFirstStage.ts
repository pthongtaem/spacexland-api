import { ObjectType, Field } from 'type-graphql';
import { LaunchRocketFirstStageCore } from './LaunchRocketFirstStageCore';

@ObjectType()
export class LaunchRocketFirstStage {
  @Field(() => [LaunchRocketFirstStageCore], { nullable: 'itemsAndList' })
  cores: LaunchRocketFirstStageCore[];
}
