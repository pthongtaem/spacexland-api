import { Resolver, Query, Ctx, Arg, Int } from 'type-graphql';
import { MyContext } from '../../types/MyContext';
import { Core } from './Core';
import { CoresFind } from './CoresFind';

const collection = 'core';
const parseCores = (core: any): any => ({ ...core, id: core.core_serial });

@Resolver()
export class CoreResolver {
  @Query(() => [Core], { nullable: true })
  async cores(
    @Arg('find', { nullable: true }) find?: CoresFind,
    @Arg('limit', () => Int, { nullable: true }) limit?: number,
    @Arg('offset', () => Int, { nullable: true }) offset?: number,
    @Arg('order', { nullable: true }) order?: string,
    @Arg('sort', { nullable: true }) sort?: string,
    @Ctx() context?: MyContext,
  ): Promise<[Core] | null> {
    let null_dates = [];
    if (!find || (find && !find.original_launch)) {
      null_dates = await context.db
        .collection(collection)
        .find({
          original_launch: null,
          ...context.find({ query: { ...find }, collection }),
        })
        .sort(context.sort({ query: { order, sort }, collection }))
        .skip(context.offset({ offset }))
        .limit(context.limit({ limit }))
        .map(parseCores)
        .toArray();
    }
    const not_null_dates = await context.db
      .collection(collection)
      .find({
        original_launch: { $ne: null },
        ...context.find({ query: { ...find }, collection }),
      })
      .sort(context.sort({ query: { order, sort }, collection }))
      .skip(context.offset({ offset }))
      .limit(context.limit({ limit }))
      .map(parseCores)
      .toArray();

    let data = null;
    if (context.order({ order }) === -1) {
      data = null_dates.concat(not_null_dates);
    } else {
      data = not_null_dates.concat(null_dates);
    }

    if (limit) {
      return data.slice(0, limit);
    }

    return data;
  }
}
