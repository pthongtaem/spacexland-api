import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Rocket } from './types/Rocket';
import { RocketsResult } from './types/RocketsResult';

const collection = 'rocket';

@Resolver()
export class RocketResolver {
  @Query(() => [Rocket], { nullable: 'itemsAndList' })
  async rockets(
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<Rocket[] | null> {
    const data = await context.db
      .collection(collection)
      .find({})
      .sort({ first_flight: 1 })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  }

  @Query(() => RocketsResult, { nullable: true })
  async rocketsResult(
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<RocketsResult | null> {
    const data = await context.db
      .collection(collection)
      .find({})
      .sort({ first_flight: 1 })
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    const { length: totalCount } = await context.db
      .collection(collection)
      .find({})
      .toArray();

    return { data, result: { totalCount } };
  }

  @Query(() => Rocket, { nullable: true })
  async rocket(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Rocket | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
}
