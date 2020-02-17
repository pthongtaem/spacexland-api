import { ObjectType, Field, Int, Root, Ctx } from 'type-graphql';
import { Location } from '../../global/Location';
import { Rocket } from '../../rocket/types/Rocket';
import { MyContext } from '../../../types/MyContext';

@ObjectType()
export class LaunchPad {
  @Field(() => Int, { nullable: true })
  attempted_launches: number;

  @Field({ nullable: true })
  details: string;

  @Field({ nullable: true })
  id: string;

  @Field(() => Location, { nullable: true })
  location: Location;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  status: string;

  @Field(() => Int, { nullable: true })
  successful_launches: number;

  vehiclesLaunched: string[];

  @Field(() => [Rocket], { nullable: true })
  async vehicles_launched(
    @Root() parent: LaunchPad,
    @Ctx() context?: MyContext,
  ): Promise<Rocket[] | null> {
    const result = await Promise.all(
      parent.vehiclesLaunched.map(async name => {
        const [data] = await context.db
          .collection('rocket')
          .find({ name })
          .limit(1)
          .toArray();
        return data;
      }),
    );

    return result;
  }

  @Field({ nullable: true })
  wikipedia: string;
}
