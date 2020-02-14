import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Landpad } from './Landpad';

const collection = 'landpad';

@Resolver()
export class LandPadResolver {
  @Query(() => [Landpad], { nullable: true })
  async landpads(
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Ctx() context?: MyContext,
  ): Promise<[Landpad] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({}))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  }

  @Query(() => Landpad, { nullable: true })
  async landpad(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<Landpad | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ id })
      .limit(1)
      .toArray();
    return data;
  }
}
