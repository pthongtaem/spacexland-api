import { ObjectType, Field, Root, Ctx } from 'type-graphql';
import { LaunchRocketFairings } from './LaunchRocketFairings';
import { LaunchRocketFirstStage } from './LaunchRocketFirstStage';
import { LaunchRocketSecondStage } from './LaunchRocketSecondStage';
import { Rocket } from '../../rocket/types/Rocket';
import { MyContext } from '../../../types/MyContext';

@ObjectType()
export class LaunchRocket {
  @Field(() => LaunchRocketFairings, { nullable: true })
  fairings: LaunchRocketFairings;

  @Field(() => LaunchRocketFirstStage, { nullable: true })
  first_stage: LaunchRocketFirstStage;

  @Field({ nullable: true })
  rocket_name: string;

  @Field({ nullable: true })
  rocket_type: string;

  rocket_id?: string;

  @Field(() => Rocket, { nullable: true })
  async rocket(
    @Root() parent: LaunchRocket,
    @Ctx() context?: MyContext,
  ): Promise<Rocket | null> {
    const [data] = await context.db
      .collection('rocket')
      .find({ id: parent.rocket_id })
      .limit(1)
      .toArray();
    return data;
  }

  @Field(() => LaunchRocketSecondStage, { nullable: true })
  second_stage: LaunchRocketSecondStage;
}
