import { ObjectType, Field, Int, Root, Ctx } from 'type-graphql';
import { Core } from '../../core/types/Core';
import { MyContext } from '../../../types/MyContext';
import { parseCores } from '../../core/utils';

@ObjectType()
export class LaunchRocketFirstStageCore {
  @Field(() => Int, { nullable: true })
  block: number;

  core_serial?: string;

  @Field(() => Core, { nullable: true })
  async core(
    @Root() parent: LaunchRocketFirstStageCore,
    @Ctx() context?: MyContext,
  ): Promise<Core | null> {
    const [data] = await context.db
      .collection('core')
      .find({ core_serial: parent.core_serial })
      .limit(1)
      .map(parseCores)
      .toArray();
    return data;
  }

  @Field(() => Int, { nullable: true })
  flight: number;

  @Field(() => Boolean, { nullable: true })
  gridfins: boolean;

  @Field(() => Boolean, { nullable: true })
  land_success: boolean;

  @Field(() => Boolean, { nullable: true })
  landing_intent: boolean;

  @Field({ nullable: true })
  landing_type: string;

  @Field({ nullable: true })
  landing_vehicle: string;

  @Field(() => Boolean, { nullable: true })
  legs: boolean;

  @Field(() => Boolean, { nullable: true })
  reused: boolean;
}
