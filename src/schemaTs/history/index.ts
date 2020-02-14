import { Resolver, Query, Ctx, Arg, Int, ID } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { History } from './History';
import { HistoryFind } from './HistoryFind';
import { HistoriesResult } from './HistoriesResult';

const collection = 'history';

@Resolver()
export class HistortyResolver {
  @Query(() => [History], { nullable: true })
  async histories(
    @Arg('find', () => HistoryFind, { nullable: true }) find: HistoryFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<[History] | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    return data;
  }

  @Query(() => HistoriesResult, { nullable: true })
  async historiesResult(
    @Arg('find', () => HistoryFind, { nullable: true }) find: HistoryFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<HistoriesResult | null> {
    const data = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .toArray();
    const { length: totalCount } = await context.db
      .collection(collection)
      .find(context.find({ query: { ...find }, collection }))
      .toArray();
    return { data, result: { totalCount } };
  }

  @Query(() => History, { nullable: true })
  async history(
    @Arg('id', () => ID) id: string,
    @Ctx() context?: MyContext,
  ): Promise<History | null> {
    const [data] = await context.db
      .collection(collection)
      .find({ id: parseInt(id) })
      .limit(1)
      .toArray();
    return data;
  }
}
